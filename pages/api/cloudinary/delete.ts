import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { publicIds } = req.body;

    if (!publicIds || !Array.isArray(publicIds) || publicIds.length === 0) {
      return res.status(400).json({ error: 'No public IDs provided' });
    }

    // Delete resources from Cloudinary
    // Try deleting as image first, then as video if image fails
    const deletePromises = publicIds.map(async (publicId) => {
      try {
        // Try deleting as image first
        const result = await cloudinary.uploader.destroy(publicId, {
          resource_type: 'image',
          invalidate: true
        });

        // If result is "not found", try as video
        if (result.result === 'not found') {
          return await cloudinary.uploader.destroy(publicId, {
            resource_type: 'video',
            invalidate: true
          });
        }

        return result;
      } catch (error) {
        // If image deletion fails, try video
        try {
          return await cloudinary.uploader.destroy(publicId, {
            resource_type: 'video',
            invalidate: true
          });
        } catch (videoError) {
          console.error(`Failed to delete ${publicId}:`, videoError);
          return { result: 'error', public_id: publicId };
        }
      }
    });

    const results = await Promise.all(deletePromises);

    res.status(200).json({
      success: true,
      results,
      message: `Processed ${publicIds.length} deletion(s)`,
    });
  } catch (error) {
    console.error('Cloudinary deletion error:', error);
    res.status(500).json({ error: 'Failed to delete resources' });
  }
}

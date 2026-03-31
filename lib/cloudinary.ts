export interface CloudinaryUploadResult {
  secure_url: string;
  public_id: string;
  resource_type: 'image' | 'video';
  format: string;
  width: number;
  height: number;
}

export interface UploadedMedia {
  url: string;
  publicId: string;
  type: 'image' | 'video';
  isTemporary: boolean;
}

/**
 * Upload file to Cloudinary using unsigned preset with API key
 *
 * REQUIREMENTS for this to work:
 * 1. In Cloudinary Dashboard → Settings → Upload → Upload Presets
 * 2. Create/Edit preset with:
 *    - Signing Mode: "Unsigned" (CRITICAL!)
 *    - Folder: "keyhouse/properties" (or your desired folder)
 *    - Save the preset
 * 3. Use the preset name in NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
 */
export async function uploadToCloudinary(
  file: File,
  onProgress?: (progress: number) => void
): Promise<UploadedMedia> {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      throw new Error('Cloudinary configuration missing');
    }

    console.log('Uploading to Cloudinary:', {
      cloudName,
      uploadPreset,
      // apiKey: apiKey ? 'present' : 'missing',
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size
    });

    // Create form data for unsigned upload with API key
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);



    // Upload to Cloudinary
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      // Progress tracking
      if (onProgress) {
        xhr.upload.addEventListener('progress', (e) => {
          if (e.lengthComputable) {
            const progress = (e.loaded / e.total) * 100;
            onProgress(progress);
          }
        });
      }

      // Handle completion
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const result: CloudinaryUploadResult = JSON.parse(xhr.responseText);
          console.log('Upload successful:', result);
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            type: result.resource_type,
            isTemporary: true,
          });
        } else {
          const errorText = xhr.responseText;
          console.error('Upload failed:', {
            status: xhr.status,
            response: errorText
          });
          reject(new Error(`Upload failed: ${xhr.status} - ${errorText}`));
        }
      });

      // Handle error
      xhr.addEventListener('error', () => {
        console.error('Network error during upload');
        reject(new Error('Network error during upload'));
      });

      // Send request to unsigned upload endpoint
      xhr.open(
        'POST',
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`
      );
      xhr.send(formData);
    });
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
}

/**
 * Delete resources from Cloudinary
 */
export async function deleteFromCloudinary(publicIds: string[]): Promise<void> {
  try {
    const response = await fetch('/api/cloudinary/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ publicIds }),
    });

    if (!response.ok) {
      throw new Error('Failed to delete resources');
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    throw error;
  }
}

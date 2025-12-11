# Cloudinary Integration Setup Guide

This guide will help you set up Cloudinary for media uploads in the Keyhouse real estate website.

## 1. Cloudinary Account Setup

### 1.1 Create Cloudinary Account
1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for a free account
3. After registration, you'll be taken to your dashboard

### 1.2 Get Your Credentials
From your Cloudinary Dashboard, copy:
- **Cloud Name** (visible at the top)
- **API Key** (in Account Details section)
- **API Secret** (in Account Details section - click "Reveal" to see it)

## 2. Create Upload Preset

### 2.1 Navigate to Upload Presets
1. In Cloudinary Dashboard, go to **Settings** (gear icon)
2. Click **Upload** tab
3. Scroll down to **Upload presets**
4. Click **Add upload preset**

### 2.2 Configure the Preset
Create a preset with these settings:

**Basic Settings:**
- **Preset name**: `keyhouse_properties`
- **Signing Mode**: **Unsigned** (important!)
- **Folder**: `keyhouse/properties`

**Media Analysis:**
- Enable **Quality analysis**
- Enable **Accessibility analysis**

**Upload Manipulations:**
- **Allowed formats**: `jpg,png,jpeg,webp,mp4,mov`
- **Max file size**: Leave default or set to 52428800 (50MB)
- **Auto-tagging**: Optional (can help organize)

**Transformations:**
- **Quality**: `auto`
- **Fetch Format**: `auto`

**Upload Control:**
- **Unique filename**: Enable (recommended)
- **Overwrite**: Disable (recommended)

Click **Save** when done.

## 3. Environment Variables Setup

### 3.1 Copy Environment Template
```bash
cp .env.example .env.local
```

### 3.2 Fill in Your Credentials
Edit `.env.local` and replace the placeholders:

```env
# Firebase Configuration (already set up)
NEXT_PUBLIC_FIREBASE_API_KEY=your_existing_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_existing_domain
# ... other Firebase vars ...

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=keyhouse_properties
```

**Important:** Never commit `.env.local` to Git! It's already in `.gitignore`.

## 4. Test the Integration

### 4.1 Start Development Server
```bash
npm run dev
```

### 4.2 Test Upload
1. Navigate to `/catalog/manage` and log in
2. Click **הוסף נכס חדש** (Add New Property)
3. Scroll to **תמונה/וידאו ראשיים** (Main Media)
4. Try dragging and dropping an image or clicking to select
5. Wait for the upload to complete
6. Check your Cloudinary Media Library to confirm the upload

## 5. Features Overview

### 5.1 Main Media Section
- Upload 1 main image or video
- Displays prominently on property cards and detail pages
- Supports: JPG, PNG, WEBP (up to 10MB), MP4, MOV (up to 50MB)

### 5.2 Additional Media Section
- Upload up to 20 additional images/videos
- Displayed in a gallery carousel
- Supports drag-to-reorder
- Same format support as main media

### 5.3 Smart Deletion
- When editing a property and removing media, old files are kept until save
- On save, removed media is automatically deleted from Cloudinary
- When deleting a property, all associated media is deleted from Cloudinary

## 6. Troubleshooting

### Upload Fails with "Failed to generate signature"
**Solution:** Check that your `CLOUDINARY_API_SECRET` is correct in `.env.local` and restart the dev server.

### Upload Fails with "Upload preset not found"
**Solution:**
1. Verify the preset name is exactly `keyhouse_properties`
2. Ensure it's set to "Unsigned" mode
3. Check `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` matches the preset name

### Images Upload but Don't Display
**Solution:** Check browser console for errors. Verify `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` is correct.

### "Invalid API Key" Error
**Solution:**
1. Verify `CLOUDINARY_API_KEY` is correct
2. Ensure there are no extra spaces in `.env.local`
3. Restart the development server after changing environment variables

### Media Not Deleted from Cloudinary
**Solution:** Check that:
1. API Secret is correct
2. Public IDs are being saved correctly with properties
3. Check browser console for deletion errors

## 7. Production Deployment

### 7.1 Vercel / Netlify
Add all environment variables to your deployment platform:
1. Go to project settings
2. Navigate to Environment Variables
3. Add all `NEXT_PUBLIC_*` and `CLOUDINARY_*` variables
4. Redeploy the application

### 7.2 Security Notes
- **Never** commit `.env.local` to Git
- **Never** expose `CLOUDINARY_API_SECRET` to the client
- The API signature endpoint (`/api/cloudinary/signature.ts`) keeps the secret server-side
- The unsigned upload preset allows client uploads without exposing secrets

## 8. Usage Limits

### Free Tier Limits:
- **Storage**: 25 GB
- **Bandwidth**: 25 GB/month
- **Transformations**: 25,000/month
- **Video**: 500 MB storage, 2.5 GB bandwidth

### Estimation:
- ~2,500 properties with 10 images each (assuming 1MB per image)
- Or ~100,000 page views/month
- Upgrade if you exceed these limits

## 9. Optional Enhancements

### 9.1 Enable Auto-Backup
In Cloudinary Settings:
1. Go to **Add-ons**
2. Enable **Backup** (paid feature)
3. Configure backup frequency

### 9.2 Set up Webhooks
For advanced monitoring:
1. Go to **Settings** > **Notifications**
2. Add webhook URLs for upload/delete events
3. Monitor media operations in real-time

## 10. Support

For issues:
- **Cloudinary Support**: [support.cloudinary.com](https://support.cloudinary.com)
- **Documentation**: [cloudinary.com/documentation](https://cloudinary.com/documentation)
- **Status Page**: [status.cloudinary.com](https://status.cloudinary.com)

---

**Setup Complete!** 🎉

You can now upload images and videos for your properties with a beautiful drag-and-drop interface.

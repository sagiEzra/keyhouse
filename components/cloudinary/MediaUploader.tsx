import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaImage, FaVideo, FaTimes, FaCheck } from 'react-icons/fa';
import { uploadToCloudinary, UploadedMedia } from '@/lib/cloudinary';

interface MediaUploaderProps {
  mode: 'main' | 'additional';
  maxFiles?: number;
  currentMedia?: UploadedMedia[];
  onMediaChange: (media: UploadedMedia[]) => void;
}

interface UploadingFile {
  file: File;
  progress: number;
  error?: string;
  completed?: boolean;
  media?: UploadedMedia;
}

export default function MediaUploader({
  mode,
  maxFiles = mode === 'main' ? 1 : 20,
  currentMedia = [],
  onMediaChange,
}: MediaUploaderProps) {
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      // Check max files limit
      const remainingSlots = maxFiles - currentMedia.length - uploadingFiles.length;
      const filesToUpload = acceptedFiles.slice(0, remainingSlots);

      if (filesToUpload.length === 0) {
        alert(`ניתן להעלות עד ${maxFiles} קבצים`);
        return;
      }

      // Add files to uploading state
      const newUploadingFiles: UploadingFile[] = filesToUpload.map((file) => ({
        file,
        progress: 0,
      }));

      setUploadingFiles((prev) => [...prev, ...newUploadingFiles]);

      // Upload files
      for (let i = 0; i < filesToUpload.length; i++) {
        const file = filesToUpload[i];
        const fileIndex = uploadingFiles.length + i;

        try {
          const media = await uploadToCloudinary(file, (progress) => {
            setUploadingFiles((prev) => {
              const updated = [...prev];
              if (updated[fileIndex]) {
                updated[fileIndex].progress = progress;
              }
              return updated;
            });
          });

          // Mark as completed
          setUploadingFiles((prev) => {
            const updated = [...prev];
            if (updated[fileIndex]) {
              updated[fileIndex].completed = true;
              updated[fileIndex].media = media;
            }
            return updated;
          });

          // Add to current media
          onMediaChange([...currentMedia, media]);

          // Remove from uploading after a delay
          setTimeout(() => {
            setUploadingFiles((prev) => prev.filter((_, idx) => idx !== fileIndex));
          }, 1000);
        } catch (error) {
          console.error('Upload error:', error);
          setUploadingFiles((prev) => {
            const updated = [...prev];
            if (updated[fileIndex]) {
              updated[fileIndex].error = 'העלאה נכשלה';
            }
            return updated;
          });
        }
      }
    },
    [currentMedia, maxFiles, onMediaChange, uploadingFiles.length]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp'],
      'video/*': ['.mp4', '.mov'],
    },
    maxSize: 50 * 1024 * 1024, // 50MB
    multiple: mode === 'additional',
  });

  const removeMedia = (index: number) => {
    const updated = currentMedia.filter((_, idx) => idx !== index);
    onMediaChange(updated);
  };

  const moveMedia = (fromIndex: number, toIndex: number) => {
    const updated = [...currentMedia];
    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);
    onMediaChange(updated);
  };

  const isImage = (url: string) => {
    return /\.(jpg|jpeg|png|webp|gif)$/i.test(url) || url.includes('/image/');
  };

  const isVideo = (url: string) => {
    return /\.(mp4|mov|avi|webm)$/i.test(url) || url.includes('/video/');
  };

  const canUploadMore = currentMedia.length + uploadingFiles.length < maxFiles;

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      {canUploadMore && (
        <div
          {...getRootProps()}
          className={`relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${
            isDragActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
          }`}
          style={{
            border: isDragActive
              ? '3px dashed #c79d2a'
              : '2px dashed rgba(25,39,74,0.2)',
            background: isDragActive
              ? 'linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.95) 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 50%, rgba(241,194,59,0.03) 100%)',
            boxShadow: isDragActive
              ? '0 20px 50px rgba(199,157,42,0.3), inset 0 1px 0 rgba(255,255,255,0.6)'
              : '0 8px 20px rgba(25,39,74,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
          }}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <motion.div
              animate={{
                y: isDragActive ? -10 : 0,
                scale: isDragActive ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <div
                className="flex h-24 w-24 items-center justify-center rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(199,157,42,0.15) 0%, rgba(255,255,255,0.9) 100%)',
                  border: '3px solid rgba(199,157,42,0.3)',
                  boxShadow: '0 8px 25px rgba(199,157,42,0.2)',
                }}
              >
                <FaCloudUploadAlt className="h-12 w-12" style={{ color: '#c79d2a' }} />
              </div>
            </motion.div>

            <h3 className="text-2xl font-serif font-bold mb-2" style={{ color: 'rgba(25,39,74,0.97)' }}>
              {isDragActive ? 'שחרר לפה...' : 'גרור קבצים לכאן'}
            </h3>
            <p className="text-lg mb-4" style={{ color: 'rgba(25,39,74,0.6)' }}>
              או לחץ לבחירת קבצים
            </p>
            <p className="text-base" style={{ color: 'rgba(25,39,74,0.5)' }}>
              תמונות: JPG, PNG, WEBP (עד 10MB) • סרטונים: MP4, MOV (עד 50MB)
            </p>
            <p className="text-base mt-2" style={{ color: 'rgba(25,39,74,0.5)' }}>
              {mode === 'main'
                ? 'קובץ אחד בלבד'
                : `עד ${maxFiles} קבצים (${currentMedia.length}/${maxFiles})`}
            </p>
          </div>
        </div>
      )}

      {/* Uploading Progress */}
      <AnimatePresence>
        {uploadingFiles.length > 0 && (
          <div className="space-y-3">
            {uploadingFiles.map((uploadingFile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, #fafafa 100%)',
                  border: '1px solid rgba(25,39,74,0.1)',
                  boxShadow: '0 4px 12px rgba(25,39,74,0.06)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl flex-shrink-0"
                    style={{
                      background: uploadingFile.completed
                        ? 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, rgba(255,255,255,0.9) 100%)'
                        : 'linear-gradient(135deg, rgba(199,157,42,0.1) 0%, rgba(255,255,255,0.9) 100%)',
                      border: uploadingFile.completed
                        ? '2px solid rgba(34,197,94,0.3)'
                        : '2px solid rgba(199,157,42,0.3)',
                    }}
                  >
                    {uploadingFile.completed ? (
                      <FaCheck className="h-6 w-6" style={{ color: '#22c55e' }} />
                    ) : uploadingFile.file.type.startsWith('video') ? (
                      <FaVideo className="h-6 w-6" style={{ color: 'rgba(25,39,74,0.7)' }} />
                    ) : (
                      <FaImage className="h-6 w-6" style={{ color: 'rgba(25,39,74,0.7)' }} />
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="text-base font-medium mb-2" style={{ color: 'rgba(25,39,74,0.97)' }}>
                      {uploadingFile.file.name}
                    </p>
                    {uploadingFile.error ? (
                      <p className="text-sm" style={{ color: '#ef4444' }}>
                        {uploadingFile.error}
                      </p>
                    ) : (
                      <div className="relative h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(25,39,74,0.1)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadingFile.progress}%` }}
                          transition={{ duration: 0.3 }}
                          className="h-full rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, #c79d2a 0%, rgba(199,157,42,0.8) 100%)',
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="text-lg font-bold" style={{ color: 'rgba(25,39,74,0.97)' }}>
                    {Math.round(uploadingFile.progress)}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Current Media Grid */}
      {currentMedia.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {currentMedia.map((media, index) => (
              <motion.div
                key={media.publicId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="relative group"
                  draggable={mode === 'additional'}
                  onDragStart={(e) => {
                    e.dataTransfer.effectAllowed = 'move';
                    e.dataTransfer.setData('text/plain', index.toString());
                  }}
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                    moveMedia(fromIndex, index);
                  }}
                >
                <div
                  className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105"
                  style={{
                    boxShadow: '0 4px 12px rgba(25,39,74,0.1)',
                  }}
                >
                  {isVideo(media.url) ? (
                    <div className="relative">
                      <video src={media.url} className="w-full h-48 object-cover" />
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'rgba(0,0,0,0.3)' }}
                      >
                        <FaVideo className="h-12 w-12" style={{ color: '#ffffff' }} />
                      </div>
                    </div>
                  ) : (
                    <img src={media.url} alt={`Media ${index + 1}`} className="w-full h-48 object-cover" />
                  )}

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeMedia(index)}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(239,68,68,0.9) 0%, rgba(239,68,68,0.8) 100%)',
                      boxShadow: '0 4px 12px rgba(239,68,68,0.4)',
                    }}
                  >
                    <FaTimes className="h-4 w-4" style={{ color: '#ffffff' }} />
                  </button>

                  {/* Type Badge */}
                  <div
                    className="absolute bottom-2 left-2 px-2 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: isVideo(media.url)
                        ? 'rgba(59,130,246,0.9)'
                        : 'rgba(34,197,94,0.9)',
                      color: '#ffffff',
                    }}
                  >
                    {isVideo(media.url) ? 'וידאו' : 'תמונה'}
                  </div>

                  {/* Order Number (for additional mode) */}
                  {mode === 'additional' && (
                    <div
                      className="absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                      style={{
                        background: 'rgba(25,39,74,0.8)',
                        color: '#ffffff',
                      }}
                    >
                      {index + 1}
                    </div>
                  )}
                </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Help Text */}
      {mode === 'additional' && currentMedia.length > 1 && (
        <p className="text-sm text-center" style={{ color: 'rgba(25,39,74,0.5)' }}>
          גרור תמונות כדי לשנות את הסדר
        </p>
      )}
    </div>
  );
}

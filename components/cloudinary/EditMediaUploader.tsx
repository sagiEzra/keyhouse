import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaImage, FaVideo, FaTimes } from 'react-icons/fa';
import { UploadedMedia } from '@/lib/cloudinary';
import { LocalMediaFile } from './LocalMediaUploader';

interface EditMediaUploaderProps {
  mode: 'main' | 'additional';
  maxFiles?: number;

  // Existing media from Cloudinary
  existingMedia: UploadedMedia[];
  onExistingMediaRemove: (index: number) => void;
  onExistingMediaReorder?: (reorderedMedia: UploadedMedia[]) => void;

  // New local files
  newFiles: LocalMediaFile[];
  onNewFilesChange: (files: LocalMediaFile[]) => void;
}

export default function EditMediaUploader({
  mode,
  maxFiles = mode === 'main' ? 1 : 20,
  existingMedia,
  onExistingMediaRemove,
  onExistingMediaReorder,
  newFiles,
  onNewFilesChange,
}: EditMediaUploaderProps) {
  const totalMediaCount = existingMedia.length + newFiles.length;

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      // Check max files limit
      const remainingSlots = maxFiles - totalMediaCount;
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);

      if (filesToAdd.length === 0) {
        alert(`ניתן להעלות עד ${maxFiles} קבצים`);
        return;
      }

      // Create preview URLs for new files
      const newMediaFiles: LocalMediaFile[] = filesToAdd.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        type: file.type.startsWith('video') ? 'video' : 'image',
      }));

      // For main mode, replace; for additional mode, append
      if (mode === 'main') {
        // Revoke old preview URLs if exist
        newFiles.forEach(f => URL.revokeObjectURL(f.preview));
        onNewFilesChange(newMediaFiles);
      } else {
        onNewFilesChange([...newFiles, ...newMediaFiles]);
      }
    },
    [totalMediaCount, maxFiles, newFiles, onNewFilesChange, mode]
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

  const removeNewFile = (index: number) => {
    // Revoke the preview URL to free memory
    URL.revokeObjectURL(newFiles[index].preview);
    const updated = newFiles.filter((_, idx) => idx !== index);
    onNewFilesChange(updated);
  };

  const moveMedia = (fromIndex: number, toIndex: number) => {
    const totalExisting = existingMedia.length;

    // Determine if we're moving within existing, within new, or between them
    const fromIsExisting = fromIndex < totalExisting;
    const toIsExisting = toIndex < totalExisting;

    if (fromIsExisting && toIsExisting) {
      // Moving within existing media
      const updated = [...existingMedia];
      const [movedItem] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, movedItem);
      if (onExistingMediaReorder) {
        onExistingMediaReorder(updated);
      }
    } else if (!fromIsExisting && !toIsExisting) {
      // Moving within new files
      const fromNewIndex = fromIndex - totalExisting;
      const toNewIndex = toIndex - totalExisting;
      const updated = [...newFiles];
      const [movedItem] = updated.splice(fromNewIndex, 1);
      updated.splice(toNewIndex, 0, movedItem);
      onNewFilesChange(updated);
    }
    // Cross-type moves (existing to new or vice versa) are not supported for simplicity
  };

  const isVideo = (url: string) => {
    return /\.(mp4|mov|avi|webm)$/i.test(url) || url.includes('/video/');
  };

  const canUploadMore = totalMediaCount < maxFiles;

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
                : `עד ${maxFiles} קבצים (${totalMediaCount}/${maxFiles})`}
            </p>
          </div>
        </div>
      )}

      {/* Current Media Grid (Existing + New) */}
      {totalMediaCount > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {/* Existing Media */}
            {existingMedia.map((media, index) => (
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
                    if (mode === 'additional') {
                      e.dataTransfer.effectAllowed = 'move';
                      e.dataTransfer.setData('text/plain', index.toString());
                    }
                  }}
                  onDragOver={(e) => {
                    if (mode === 'additional') {
                      e.preventDefault();
                      e.dataTransfer.dropEffect = 'move';
                    }
                  }}
                  onDrop={(e) => {
                    if (mode === 'additional') {
                      e.preventDefault();
                      const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                      moveMedia(fromIndex, index);
                    }
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
                      onClick={() => onExistingMediaRemove(index)}
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

                    {/* Existing Badge (for main mode or in corner for additional) */}
                    {mode === 'main' && (
                      <div
                        className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: 'rgba(25,39,74,0.8)',
                          color: '#ffffff',
                        }}
                      >
                        קיים
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* New Files */}
            {newFiles.map((mediaFile, index) => {
              const globalIndex = existingMedia.length + index;
              return (
                <motion.div
                  key={mediaFile.preview}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative group"
                    draggable={mode === 'additional'}
                    onDragStart={(e) => {
                      if (mode === 'additional') {
                        e.dataTransfer.effectAllowed = 'move';
                        e.dataTransfer.setData('text/plain', globalIndex.toString());
                      }
                    }}
                    onDragOver={(e) => {
                      if (mode === 'additional') {
                        e.preventDefault();
                        e.dataTransfer.dropEffect = 'move';
                      }
                    }}
                    onDrop={(e) => {
                      if (mode === 'additional') {
                        e.preventDefault();
                        const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
                        moveMedia(fromIndex, globalIndex);
                      }
                    }}
                  >
                  <div
                    className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:scale-105"
                    style={{
                      boxShadow: '0 4px 12px rgba(25,39,74,0.1)',
                      border: '2px solid rgba(199,157,42,0.3)',
                    }}
                  >
                    {mediaFile.type === 'video' ? (
                      <div className="relative">
                        <video src={mediaFile.preview} className="w-full h-48 object-cover" />
                        <div
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ background: 'rgba(0,0,0,0.3)' }}
                        >
                          <FaVideo className="h-12 w-12" style={{ color: '#ffffff' }} />
                        </div>
                      </div>
                    ) : (
                      <img src={mediaFile.preview} alt={`New ${index + 1}`} className="w-full h-48 object-cover" />
                    )}

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeNewFile(index)}
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
                        background: mediaFile.type === 'video'
                          ? 'rgba(59,130,246,0.9)'
                          : 'rgba(34,197,94,0.9)',
                        color: '#ffffff',
                      }}
                    >
                      {mediaFile.type === 'video' ? 'וידאו' : 'תמונה'}
                    </div>

                    {/* Order Number (for additional mode) */}
                    {mode === 'additional' && (
                      <div
                        className="absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm"
                        style={{
                          background: 'rgba(199,157,42,0.9)',
                          color: '#ffffff',
                        }}
                      >
                        {globalIndex + 1}
                      </div>
                    )}

                    {/* New Badge (for main mode) */}
                    {mode === 'main' && (
                      <div
                        className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-bold"
                        style={{
                          background: 'rgba(199,157,42,0.9)',
                          color: '#ffffff',
                        }}
                      >
                        חדש
                      </div>
                    )}
                  </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Help Text */}
      {mode === 'additional' && totalMediaCount > 1 && (
        <p className="text-sm text-center" style={{ color: 'rgba(25,39,74,0.5)' }}>
          גרור תמונות כדי לשנות את הסדר • תמונות קיימות יישמרו, תמונות חדשות יועלו בשמירה
        </p>
      )}
    </div>
  );
}

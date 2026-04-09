import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaVideo, FaTimes, FaStar } from 'react-icons/fa';
import { UploadedMedia } from '@/lib/cloudinary';
import { LocalMediaFile } from './LocalMediaUploader';

interface EditMediaUploaderProps {
  maxFiles?: number;

  // Existing media from Cloudinary (combined: main first, then additional)
  existingMedia: UploadedMedia[];
  onExistingMediaRemove: (index: number) => void;
  onExistingMediaReorder?: (reorderedMedia: UploadedMedia[]) => void;

  // New local files
  newFiles: LocalMediaFile[];
  onNewFilesChange: (files: LocalMediaFile[]) => void;

  // Main selection across combined [existingMedia..., newFiles...]
  mainIndex: number;
  onSetMainIndex: (index: number) => void;
}

export default function EditMediaUploader({
  maxFiles = 21,
  existingMedia,
  onExistingMediaRemove,
  onExistingMediaReorder,
  newFiles,
  onNewFilesChange,
  mainIndex,
  onSetMainIndex,
}: EditMediaUploaderProps) {
  const totalMediaCount = existingMedia.length + newFiles.length;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const remainingSlots = maxFiles - totalMediaCount;
      const filesToAdd = acceptedFiles.slice(0, remainingSlots);
      if (filesToAdd.length === 0) {
        alert(`ניתן להעלות עד ${maxFiles} קבצים`);
        return;
      }
      const newMediaFiles: LocalMediaFile[] = filesToAdd.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        type: file.type.startsWith('video') ? 'video' : 'image',
      }));
      onNewFilesChange([...newFiles, ...newMediaFiles]);
    },
    [totalMediaCount, maxFiles, newFiles, onNewFilesChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp'],
      'video/*': ['.mp4', '.mov'],
    },
    maxSize: 50 * 1024 * 1024,
    multiple: true,
  });

  const removeNewFile = (index: number) => {
    URL.revokeObjectURL(newFiles[index].preview);
    const updated = newFiles.filter((_, idx) => idx !== index);
    onNewFilesChange(updated);
    const globalIndex = existingMedia.length + index;
    if (globalIndex === mainIndex) {
      onSetMainIndex(0);
    } else if (globalIndex < mainIndex) {
      onSetMainIndex(mainIndex - 1);
    }
  };

  const moveMedia = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;
    const totalExisting = existingMedia.length;
    const fromIsExisting = fromIndex < totalExisting;
    const toIsExisting = toIndex < totalExisting;

    if (fromIsExisting && toIsExisting && onExistingMediaReorder) {
      const updated = [...existingMedia];
      const [movedItem] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, movedItem);
      onExistingMediaReorder(updated);
      // Adjust mainIndex if main was in existing portion
      if (mainIndex < totalExisting) {
        let newMainIndex = mainIndex;
        if (mainIndex === fromIndex) newMainIndex = toIndex;
        else if (fromIndex < mainIndex && toIndex >= mainIndex) newMainIndex = mainIndex - 1;
        else if (fromIndex > mainIndex && toIndex <= mainIndex) newMainIndex = mainIndex + 1;
        if (newMainIndex !== mainIndex) onSetMainIndex(newMainIndex);
      }
    } else if (!fromIsExisting && !toIsExisting) {
      const fromNewIndex = fromIndex - totalExisting;
      const toNewIndex = toIndex - totalExisting;
      const updated = [...newFiles];
      const [movedItem] = updated.splice(fromNewIndex, 1);
      updated.splice(toNewIndex, 0, movedItem);
      onNewFilesChange(updated);
      // Adjust mainIndex if main was in new portion
      if (mainIndex >= totalExisting) {
        const relMain = mainIndex - totalExisting;
        let newRelMain = relMain;
        if (relMain === fromNewIndex) newRelMain = toNewIndex;
        else if (fromNewIndex < relMain && toNewIndex >= relMain) newRelMain = relMain - 1;
        else if (fromNewIndex > relMain && toNewIndex <= relMain) newRelMain = relMain + 1;
        if (newRelMain !== relMain) onSetMainIndex(totalExisting + newRelMain);
      }
    }
  };

  const isVideo = (url: string) => /\.(mp4|mov|avi|webm)$/i.test(url) || url.includes('/video/');

  const canUploadMore = totalMediaCount < maxFiles;

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      {canUploadMore && (
        <div
          {...getRootProps()}
          className={`relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${
            isDragActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
          }`}
          style={{
            border: isDragActive ? '3px dashed #c79d2a' : '2px dashed rgba(25,39,74,0.2)',
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
              animate={{ y: isDragActive ? -10 : 0, scale: isDragActive ? 1.1 : 1 }}
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
              תמונות: JPG, PNG, WEBP • סרטונים: MP4, MOV (עד 50MB)
            </p>
            <p className="text-base mt-2" style={{ color: 'rgba(25,39,74,0.5)' }}>
              {`${totalMediaCount} / ${maxFiles} קבצים`}
            </p>
          </div>
        </div>
      )}

      {/* Instruction hint */}
      {totalMediaCount > 0 && (
        <p className="text-sm text-center" style={{ color: 'rgba(25,39,74,0.55)' }}>
          לחץ על תמונה כדי להגדירה כראשית • גרור לשינוי סדר
        </p>
      )}

      {/* Combined Media Grid */}
      {totalMediaCount > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {/* Existing Media */}
            {existingMedia.map((media, index) => {
              const isMain = index === mainIndex;
              return (
                <motion.div
                  key={media.publicId || `existing-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative group cursor-pointer"
                    draggable
                    onClick={() => onSetMainIndex(index)}
                    onDragStart={(e) => {
                      e.dataTransfer.effectAllowed = 'move';
                      e.dataTransfer.setData('text/plain', index.toString());
                    }}
                    onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }}
                    onDrop={(e) => {
                      e.preventDefault();
                      moveMedia(parseInt(e.dataTransfer.getData('text/plain')), index);
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl transition-all duration-300"
                      style={{
                        boxShadow: isMain
                          ? '0 0 0 3px #c79d2a, 0 8px 25px rgba(199,157,42,0.35)'
                          : '0 4px 12px rgba(25,39,74,0.1)',
                        transform: isMain ? 'scale(1.02)' : undefined,
                      }}
                    >
                      {/* Gold overlay for main */}
                      {isMain && (
                        <div
                          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
                          style={{ background: 'linear-gradient(135deg, rgba(199,157,42,0.15) 0%, transparent 60%)' }}
                        />
                      )}

                      {isVideo(media.url) ? (
                        <div className="relative">
                          <video src={media.url} className="w-full h-48 object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.3)' }}>
                            <FaVideo className="h-12 w-12" style={{ color: '#ffffff' }} />
                          </div>
                        </div>
                      ) : (
                        <img src={media.url} alt={`Media ${index + 1}`} className="w-full h-48 object-cover" />
                      )}

                      {/* Main badge */}
                      {isMain ? (
                        <div
                          className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold z-20"
                          style={{ background: '#c79d2a', color: '#ffffff', boxShadow: '0 2px 8px rgba(199,157,42,0.5)' }}
                        >
                          <FaStar className="h-3 w-3" />
                          ראשי
                        </div>
                      ) : (
                        <div
                          className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium z-20 opacity-0 group-hover:opacity-100 transition-all duration-200"
                          style={{ background: 'rgba(25,39,74,0.75)', color: '#ffffff' }}
                        >
                          קבע כראשי
                        </div>
                      )}

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); onExistingMediaRemove(index); }}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                        style={{
                          background: 'linear-gradient(135deg, rgba(239,68,68,0.9) 0%, rgba(239,68,68,0.8) 100%)',
                          boxShadow: '0 4px 12px rgba(239,68,68,0.4)',
                        }}
                      >
                        <FaTimes className="h-4 w-4" style={{ color: '#ffffff' }} />
                      </button>

                      {/* Type badge */}
                      <div
                        className="absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold z-20"
                        style={{
                          background: isVideo(media.url) ? 'rgba(59,130,246,0.9)' : 'rgba(34,197,94,0.9)',
                          color: '#ffffff',
                        }}
                      >
                        {isVideo(media.url) ? 'וידאו' : 'תמונה'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* New Files */}
            {newFiles.map((mediaFile, index) => {
              const globalIndex = existingMedia.length + index;
              const isMain = globalIndex === mainIndex;
              return (
                <motion.div
                  key={mediaFile.preview}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative group cursor-pointer"
                    draggable
                    onClick={() => onSetMainIndex(globalIndex)}
                    onDragStart={(e) => {
                      e.dataTransfer.effectAllowed = 'move';
                      e.dataTransfer.setData('text/plain', globalIndex.toString());
                    }}
                    onDragOver={(e) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }}
                    onDrop={(e) => {
                      e.preventDefault();
                      moveMedia(parseInt(e.dataTransfer.getData('text/plain')), globalIndex);
                    }}
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl transition-all duration-300"
                      style={{
                        boxShadow: isMain
                          ? '0 0 0 3px #c79d2a, 0 8px 25px rgba(199,157,42,0.35)'
                          : '0 4px 12px rgba(25,39,74,0.1)',
                        transform: isMain ? 'scale(1.02)' : undefined,
                        border: '2px solid rgba(199,157,42,0.25)',
                      }}
                    >
                      {/* Gold overlay for main */}
                      {isMain && (
                        <div
                          className="absolute inset-0 pointer-events-none z-10 rounded-2xl"
                          style={{ background: 'linear-gradient(135deg, rgba(199,157,42,0.15) 0%, transparent 60%)' }}
                        />
                      )}

                      {mediaFile.type === 'video' ? (
                        <div className="relative">
                          <video src={mediaFile.preview} className="w-full h-48 object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.3)' }}>
                            <FaVideo className="h-12 w-12" style={{ color: '#ffffff' }} />
                          </div>
                        </div>
                      ) : (
                        <img src={mediaFile.preview} alt={`New ${index + 1}`} className="w-full h-48 object-cover" />
                      )}

                      {/* Main badge */}
                      {isMain ? (
                        <div
                          className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold z-20"
                          style={{ background: '#c79d2a', color: '#ffffff', boxShadow: '0 2px 8px rgba(199,157,42,0.5)' }}
                        >
                          <FaStar className="h-3 w-3" />
                          ראשי
                        </div>
                      ) : (
                        <div
                          className="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium z-20 opacity-0 group-hover:opacity-100 transition-all duration-200"
                          style={{ background: 'rgba(25,39,74,0.75)', color: '#ffffff' }}
                        >
                          קבע כראשי
                        </div>
                      )}

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeNewFile(index); }}
                        className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-20"
                        style={{
                          background: 'linear-gradient(135deg, rgba(239,68,68,0.9) 0%, rgba(239,68,68,0.8) 100%)',
                          boxShadow: '0 4px 12px rgba(239,68,68,0.4)',
                        }}
                      >
                        <FaTimes className="h-4 w-4" style={{ color: '#ffffff' }} />
                      </button>

                      {/* Type badge */}
                      <div
                        className="absolute bottom-2 right-2 px-2 py-1 rounded-full text-xs font-bold z-20"
                        style={{
                          background: mediaFile.type === 'video' ? 'rgba(59,130,246,0.9)' : 'rgba(34,197,94,0.9)',
                          color: '#ffffff',
                        }}
                      >
                        {mediaFile.type === 'video' ? 'וידאו' : 'תמונה'}
                      </div>

                      {/* "New" indicator dot */}
                      <div
                        className="absolute bottom-2 left-2 w-2 h-2 rounded-full z-20"
                        style={{ background: '#c79d2a' }}
                        title="קובץ חדש"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

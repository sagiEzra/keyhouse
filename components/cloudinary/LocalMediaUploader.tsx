import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCloudUploadAlt, FaVideo, FaTimes, FaStar } from 'react-icons/fa';

interface LocalMediaFile {
  file: File;
  preview: string;
  type: 'image' | 'video';
}

interface LocalMediaUploaderProps {
  maxFiles?: number;
  currentFiles?: LocalMediaFile[];
  onFilesChange: (files: LocalMediaFile[]) => void;
  mainIndex: number;
  onSetMainIndex: (index: number) => void;
}

export default function LocalMediaUploader({
  maxFiles = 21,
  currentFiles = [],
  onFilesChange,
  mainIndex,
  onSetMainIndex,
}: LocalMediaUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const remainingSlots = maxFiles - currentFiles.length;
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
      onFilesChange([...currentFiles, ...newMediaFiles]);
    },
    [currentFiles, maxFiles, onFilesChange]
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

  const removeFile = (index: number) => {
    URL.revokeObjectURL(currentFiles[index].preview);
    const updated = currentFiles.filter((_, idx) => idx !== index);
    onFilesChange(updated);
    if (index === mainIndex) {
      onSetMainIndex(0);
    } else if (index < mainIndex) {
      onSetMainIndex(mainIndex - 1);
    }
  };

  const moveFile = (fromIndex: number, toIndex: number) => {
    if (fromIndex === toIndex) return;
    const updated = [...currentFiles];
    const [movedItem] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, movedItem);
    onFilesChange(updated);
    let newMainIndex = mainIndex;
    if (mainIndex === fromIndex) {
      newMainIndex = toIndex;
    } else if (fromIndex < mainIndex && toIndex >= mainIndex) {
      newMainIndex = mainIndex - 1;
    } else if (fromIndex > mainIndex && toIndex <= mainIndex) {
      newMainIndex = mainIndex + 1;
    }
    if (newMainIndex !== mainIndex) onSetMainIndex(newMainIndex);
  };

  const canUploadMore = currentFiles.length < maxFiles;

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
              {`${currentFiles.length} / ${maxFiles} קבצים הועלו`}
            </p>
          </div>
        </div>
      )}

      {/* Instruction hint */}
      {currentFiles.length > 0 && (
        <p className="text-sm text-center" style={{ color: 'rgba(25,39,74,0.55)' }}>
          לחץ על תמונה כדי להגדירה כראשית • גרור לשינוי סדר
        </p>
      )}

      {/* Files Grid */}
      {currentFiles.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {currentFiles.map((mediaFile, index) => {
              const isMain = index === mainIndex;
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
                    onClick={() => onSetMainIndex(index)}
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
                      moveFile(parseInt(e.dataTransfer.getData('text/plain')), index);
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

                      {mediaFile.type === 'video' ? (
                        <div className="relative">
                          <video src={mediaFile.preview} className="w-full h-48 object-cover" />
                          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.3)' }}>
                            <FaVideo className="h-12 w-12" style={{ color: '#ffffff' }} />
                          </div>
                        </div>
                      ) : (
                        <img src={mediaFile.preview} alt={`Media ${index + 1}`} className="w-full h-48 object-cover" />
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
                        onClick={(e) => { e.stopPropagation(); removeFile(index); }}
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

export type { LocalMediaFile };

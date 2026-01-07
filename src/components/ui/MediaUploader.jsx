import React, { useState, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { Upload, X, Image, Video, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function MediaUploader({ 
  sectionId, 
  currentMedia, 
  onMediaChange, 
  mediaType = 'image',
  className,
  aspectRatio = 'video',
  isAdmin = false
}) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const { file_url } = await base44.integrations.Core.UploadFile({ file });
      
      const existingMedia = await base44.entities.SiteMedia.filter({ section_id: sectionId });
      
      if (existingMedia.length > 0) {
        await base44.entities.SiteMedia.update(existingMedia[0].id, {
          media_url: file_url,
          media_type: mediaType
        });
      } else {
        await base44.entities.SiteMedia.create({
          section_id: sectionId,
          media_url: file_url,
          media_type: mediaType
        });
      }
      
      onMediaChange?.(file_url);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemove = async () => {
    try {
      const existingMedia = await base44.entities.SiteMedia.filter({ section_id: sectionId });
      if (existingMedia.length > 0) {
        await base44.entities.SiteMedia.delete(existingMedia[0].id);
      }
      onMediaChange?.(null);
    } catch (error) {
      console.error('Remove failed:', error);
    }
  };

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]'
  };

  if (!isAdmin && currentMedia) {
    if (mediaType === 'video') {
      return (
        <div className={cn('relative rounded-2xl overflow-hidden bg-slate-100', aspectClasses[aspectRatio], className)}>
          <video 
            src={currentMedia} 
            controls 
            playsInline
            muted
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
    return (
      <div className={cn('relative rounded-2xl overflow-hidden bg-slate-100', aspectClasses[aspectRatio], className)}>
        <img 
          src={currentMedia} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  if (!isAdmin && !currentMedia) {
    return (
      <div className={cn(
        'relative rounded-2xl overflow-hidden bg-gradient-to-br from-sky-50 to-emerald-50',
        aspectClasses[aspectRatio],
        className
      )}>
        <div className="absolute inset-0 flex items-center justify-center">
          {mediaType === 'video' ? (
            <Video className="w-12 h-12 text-sky-200" />
          ) : (
            <Image className="w-12 h-12 text-sky-200" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn('relative group', className)}>
      <input
        ref={fileInputRef}
        type="file"
        accept={mediaType === 'video' ? 'video/*' : 'image/*'}
        onChange={handleFileChange}
        className="hidden"
      />
      
      {currentMedia ? (
        <div className={cn('relative rounded-2xl overflow-hidden bg-slate-100', aspectClasses[aspectRatio])}>
          {mediaType === 'video' ? (
            <video 
              src={currentMedia} 
              controls 
              playsInline
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={currentMedia} 
              alt="" 
              className="w-full h-full object-cover"
            />
          )}
          
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <Button 
              size="sm" 
              variant="secondary"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
            >
              {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Replace'}
            </Button>
            <Button 
              size="sm" 
              variant="destructive"
              onClick={handleRemove}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className={cn(
            'w-full rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/50',
            'hover:border-sky-400 hover:bg-sky-50 transition-all',
            'flex flex-col items-center justify-center gap-3',
            aspectClasses[aspectRatio]
          )}
        >
          {isUploading ? (
            <Loader2 className="w-8 h-8 text-sky-400 animate-spin" />
          ) : (
            <>
              <Upload className="w-8 h-8 text-sky-400" />
              <span className="text-sm text-sky-600 font-medium">
                Upload {mediaType === 'video' ? 'Video' : 'Image'}
              </span>
            </>
          )}
        </button>
      )}
    </div>
  );
}
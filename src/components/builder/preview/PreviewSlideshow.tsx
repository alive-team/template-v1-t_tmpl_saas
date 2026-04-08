import { useState, useEffect } from 'react';
import { SlideshowConfig } from '@/types/portfolio';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PreviewSlideshowProps {
  config: SlideshowConfig;
}

export function PreviewSlideshow({ config }: PreviewSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!config.autoplay || config.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % config.images.length);
    }, config.duration * 1000);

    return () => clearInterval(interval);
  }, [config.autoplay, config.duration, config.images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + config.images.length) % config.images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % config.images.length);
  };

  if (config.images.length === 0) {
    return (
      <div
        className="relative w-full bg-muted flex items-center justify-center"
        style={{ aspectRatio: config.aspectRatio }}
      >
        <p className="text-sm text-muted-foreground">No images added</p>
      </div>
    );
  }

  return (
    <div className="relative w-full group" style={{ aspectRatio: config.aspectRatio }}>
      <div className="relative w-full h-full overflow-hidden">
        {config.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full"
              style={{
                objectFit: config.size,
                objectPosition: config.position,
              }}
            />
          </div>
        ))}
      </div>

      {config.images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {config.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-foreground' : 'w-2 bg-foreground/40'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

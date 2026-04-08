import { SlideshowConfig } from '@/types/portfolio';

interface SlideshowControlsProps {
  config: SlideshowConfig;
  onChange: (config: SlideshowConfig) => void;
}

export function SlideshowControls({ config, onChange }: SlideshowControlsProps) {
  const handleAddImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      onChange({ ...config, images: [...config.images, url] });
    }
  };

  const handleRemoveImage = (index: number) => {
    onChange({ ...config, images: config.images.filter((_, i) => i !== index) });
  };

  return (
    <div className="space-y-4">
      {config.enabled && (
        <>
          <div className="space-y-2">
            <label className="text-foreground/60">Images</label>
            <div className="space-y-1">
              {config.images.map((image, index) => (
                <div key={index} className="flex items-center gap-1">
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => {
                      const newImages = [...config.images];
                      newImages[index] = e.target.value;
                      onChange({ ...config, images: newImages });
                    }}
                    className="flex-1 px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="px-2 py-1 border border-border/40 text-foreground/60 hover:text-foreground hover:border-foreground/60 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddImage}
                className="w-full px-2 py-1 border border-dashed border-border/40 text-foreground/60 hover:text-foreground hover:border-foreground/60 transition-colors"
              >
                + Add
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-border/40" />

          <div className="space-y-2">
            <label className="text-foreground/60">Size</label>
            <div className="flex gap-1">
              {(['cover', 'contain'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => onChange({ ...config, size })}
                  className={`flex-1 px-3 py-1.5 border border-border/40 transition-colors ${
                    config.size === size
                      ? 'bg-foreground text-background'
                      : 'text-foreground/60 hover:text-foreground hover:border-foreground/60'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground/60">Position</label>
            <select
              value={config.position}
              onChange={(e) => onChange({ ...config, position: e.target.value as SlideshowConfig['position'] })}
              className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
            >
              <option value="top">Top</option>
              <option value="center">Center</option>
              <option value="bottom">Bottom</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-foreground/60">Aspect Ratio</label>
            <select
              value={config.aspectRatio}
              onChange={(e) => onChange({ ...config, aspectRatio: e.target.value })}
              className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
            >
              <option value="16/9">16:9</option>
              <option value="4/3">4:3</option>
              <option value="1/1">1:1</option>
              <option value="21/9">21:9</option>
            </select>
          </div>

          <div className="pt-2 border-t border-border/40" />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-foreground/60">Autoplay</label>
              <input
                type="checkbox"
                checked={config.autoplay}
                onChange={(e) => onChange({ ...config, autoplay: e.target.checked })}
                className="h-3 w-3"
              />
            </div>
          </div>

          {config.autoplay && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-foreground/60">Duration</label>
                <input
                  type="number"
                  min="2"
                  max="10"
                  value={config.duration}
                  onChange={(e) => onChange({ ...config, duration: parseInt(e.target.value) || 2 })}
                  className="w-16 px-2 py-1 text-right bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

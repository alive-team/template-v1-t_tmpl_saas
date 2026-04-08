import { LogoConfig } from '@/types/portfolio';

interface LogoControlsProps {
  config: LogoConfig;
  onChange: (config: LogoConfig) => void;
}

export function LogoControls({ config, onChange }: LogoControlsProps) {
  return (
    <div className="space-y-4">
      {config.enabled && (
        <>
          <div className="space-y-2">
            <label className="text-foreground/60">Type</label>
            <div className="flex gap-1">
              {(['text', 'image'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => onChange({ ...config, type })}
                  className={`flex-1 px-3 py-1.5 border border-border/40 transition-colors ${
                    config.type === type
                      ? 'bg-foreground text-background'
                      : 'text-foreground/60 hover:text-foreground hover:border-foreground/60'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {config.type === 'text' ? (
            <div className="space-y-2">
              <label className="text-foreground/60">Logo Text</label>
              <input
                type="text"
                value={config.text || ''}
                onChange={(e) => onChange({ ...config, text: e.target.value })}
                placeholder="Your Company"
                className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/30"
              />
            </div>
          ) : (
            <div className="space-y-2">
              <label className="text-foreground/60">Image URL</label>
              <input
                type="text"
                value={config.imageUrl || ''}
                onChange={(e) => onChange({ ...config, imageUrl: e.target.value })}
                placeholder="https://example.com/logo.png"
                className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/30"
              />
            </div>
          )}

          <div className="pt-2 border-t border-border/40" />

          <div className="space-y-2">
            <label className="text-foreground/60">Placement</label>
            <select
              value={config.placement}
              onChange={(e) => onChange({ ...config, placement: e.target.value as LogoConfig['placement'] })}
              className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
            >
              <option value="top-left">Top Left</option>
              <option value="top-center">Top Center</option>
              <option value="top-right">Top Right</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-foreground/60">Size</label>
              <input
                type="number"
                min="20"
                max="80"
                value={config.size}
                onChange={(e) => onChange({ ...config, size: parseInt(e.target.value) || 20 })}
                className="w-16 px-2 py-1 text-right bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

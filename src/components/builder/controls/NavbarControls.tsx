import { NavbarConfig } from '@/types/portfolio';

interface NavbarControlsProps {
  config: NavbarConfig;
  onChange: (config: NavbarConfig) => void;
}

export function NavbarControls({ config, onChange }: NavbarControlsProps) {
  return (
    <div className="space-y-4">
      {config.enabled && (
        <>
          <div className="space-y-2">
            <label className="text-foreground/60">Placement</label>
            <div className="flex gap-1">
              {(['top', 'left'] as const).map((placement) => (
                <button
                  key={placement}
                  onClick={() => onChange({ ...config, placement })}
                  className={`flex-1 px-3 py-1.5 border border-border/40 transition-colors ${
                    config.placement === placement
                      ? 'bg-foreground text-background'
                      : 'text-foreground/60 hover:text-foreground hover:border-foreground/60'
                  }`}
                >
                  {placement.charAt(0).toUpperCase() + placement.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground/60">Alignment</label>
            <div className="flex gap-1">
              {(['left', 'center', 'right'] as const).map((alignment) => (
                <button
                  key={alignment}
                  onClick={() => onChange({ ...config, alignment })}
                  className={`flex-1 px-3 py-1.5 border border-border/40 transition-colors ${
                    config.alignment === alignment
                      ? 'bg-foreground text-background'
                      : 'text-foreground/60 hover:text-foreground hover:border-foreground/60'
                  }`}
                >
                  {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-border/40" />

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-foreground/60">Font Size</label>
              <input
                type="number"
                min="12"
                max="24"
                value={config.fontSize}
                onChange={(e) => onChange({ ...config, fontSize: parseInt(e.target.value) || 12 })}
                className="w-16 px-2 py-1 text-right bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground/60">Font Family</label>
            <select
              value={config.font}
              onChange={(e) => onChange({ ...config, font: e.target.value })}
              className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
            >
              <option value="system">System</option>
              <option value="serif">Serif</option>
              <option value="mono">Monospace</option>
            </select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-foreground/60">Background</label>
              <input
                type="color"
                value={config.background}
                onChange={(e) => onChange({ ...config, background: e.target.value })}
                className="h-6 w-16 border border-border/40 cursor-pointer"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-border/40" />

          <div className="space-y-2">
            <label className="text-foreground/60">Menu Items</label>
            <textarea
              value={config.items.join('\n')}
              onChange={(e) => onChange({ ...config, items: e.target.value.split('\n').filter(Boolean) })}
              rows={5}
              placeholder="One per line"
              className="w-full px-2 py-2 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors resize-none placeholder:text-foreground/30"
            />
          </div>
        </>
      )}
    </div>
  );
}

import { ContactConfig } from '@/types/portfolio';

interface ContactControlsProps {
  config: ContactConfig;
  onChange: (config: ContactConfig) => void;
}

export function ContactControls({ config, onChange }: ContactControlsProps) {
  return (
    <div className="space-y-4">
      {config.enabled && (
        <>
          <div className="space-y-2">
            <label className="text-foreground/60">Button Text</label>
            <input
              type="text"
              value={config.buttonText}
              onChange={(e) => onChange({ ...config, buttonText: e.target.value })}
              placeholder="Get in Touch"
              className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-foreground/60">Button Style</label>
            <div className="flex gap-1">
              {(['filled', 'outlined', 'text'] as const).map((style) => (
                <button
                  key={style}
                  onClick={() => onChange({ ...config, buttonStyle: style })}
                  className={`flex-1 px-3 py-1.5 border border-border/40 transition-colors ${
                    config.buttonStyle === style
                      ? 'bg-foreground text-background'
                      : 'text-foreground/60 hover:text-foreground hover:border-foreground/60'
                  }`}
                >
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground/60">Placement</label>
            <div className="flex gap-1">
              {(['left', 'center', 'right'] as const).map((placement) => (
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

          <div className="pt-2 border-t border-border/40" />

          <div className="space-y-2">
            <label className="text-foreground/60">Action Type</label>
            <div className="flex gap-1">
              {(['email', 'link'] as const).map((action) => (
                <button
                  key={action}
                  onClick={() => onChange({ ...config, action })}
                  className={`flex-1 px-3 py-1.5 border border-border/40 transition-colors ${
                    config.action === action
                      ? 'bg-foreground text-background'
                      : 'text-foreground/60 hover:text-foreground hover:border-foreground/60'
                  }`}
                >
                  {action.charAt(0).toUpperCase() + action.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-foreground/60">
              {config.action === 'email' ? 'Email Address' : 'Link URL'}
            </label>
            <input
              type={config.action === 'email' ? 'email' : 'url'}
              value={config.value}
              onChange={(e) => onChange({ ...config, value: e.target.value })}
              placeholder={config.action === 'email' ? 'hello@example.com' : 'https://example.com/contact'}
              className="w-full px-2 py-1 bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/30"
            />
          </div>
        </>
      )}
    </div>
  );
}

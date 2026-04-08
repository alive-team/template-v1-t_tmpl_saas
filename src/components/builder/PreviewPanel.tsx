import { useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { PortfolioConfig } from '@/types/portfolio';
import { PortfolioPreview } from './preview/PortfolioPreview';

interface PreviewPanelProps {
  config: PortfolioConfig;
}

type ViewMode = 'desktop' | 'mobile';

export function PreviewPanel({ config }: PreviewPanelProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
      <div className="px-8 py-8 border-b border-border/40 flex items-center justify-between flex-shrink-0">
        <h2 className="text-foreground/40">Preview</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setViewMode('desktop')}
            className={`transition-colors ${
              viewMode === 'desktop'
                ? 'text-foreground'
                : 'text-foreground/40 hover:text-foreground/70'
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`transition-colors ${
              viewMode === 'mobile'
                ? 'text-foreground'
                : 'text-foreground/40 hover:text-foreground/70'
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-8 flex items-start justify-center min-h-0">
        <div
          className={`bg-background border border-border/40 transition-all duration-300 ${
            viewMode === 'mobile' ? 'w-[375px]' : 'w-full max-w-[1200px]'
          }`}
          style={{
            height: viewMode === 'mobile' ? '667px' : 'auto',
            minHeight: viewMode === 'desktop' ? '600px' : undefined,
          }}
        >
          <div className="w-full h-full overflow-auto">
            <PortfolioPreview config={config} />
          </div>
        </div>
      </div>
    </div>
  );
}

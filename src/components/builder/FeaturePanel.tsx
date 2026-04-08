import { FeatureType, NavbarConfig, LogoConfig, SlideshowConfig, ProjectsConfig, ContactConfig, ChatMessage } from '@/types/portfolio';
import { ChatBox } from './ChatBox';
import { NavbarControls } from './controls/NavbarControls';
import { LogoControls } from './controls/LogoControls';
import { SlideshowControls } from './controls/SlideshowControls';
import { ProjectsControls } from './controls/ProjectsControls';
import { ContactControls } from './controls/ContactControls';

interface FeaturePanelProps {
  featureType: FeatureType;
  config: NavbarConfig | LogoConfig | SlideshowConfig | ProjectsConfig | ContactConfig;
  messages: ChatMessage[];
  onConfigChange: (config: any) => void;
  onSendMessage: (content: string) => void;
}

const featureLabels: Record<FeatureType, string> = {
  navbar: 'Navigation Bar',
  logo: 'Logo',
  slideshow: 'Slideshow / Hero',
  projects: 'Project Overview',
  contact: 'Contact / CTA',
};

export function FeaturePanel({ featureType, config, messages, onConfigChange, onSendMessage }: FeaturePanelProps) {
  const renderControls = () => {
    switch (featureType) {
      case 'navbar':
        return <NavbarControls config={config as NavbarConfig} onChange={onConfigChange} />;
      case 'logo':
        return <LogoControls config={config as LogoConfig} onChange={onConfigChange} />;
      case 'slideshow':
        return <SlideshowControls config={config as SlideshowConfig} onChange={onConfigChange} />;
      case 'projects':
        return <ProjectsControls config={config as ProjectsConfig} onChange={onConfigChange} />;
      case 'contact':
        return <ContactControls config={config as ContactConfig} onChange={onConfigChange} />;
    }
  };

  return (
    <div className="w-80 flex flex-col h-full overflow-hidden border-r border-border/40 flex-shrink-0">
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="px-8 py-8">
          <div>
            <h3 className="text-foreground/60 mb-6">{featureLabels[featureType]} Controls</h3>
            <div className="mb-6">
              <div className="relative border border-border/40 bg-foreground/5">
                <input
                  type="text"
                  placeholder="Write adjustment..."
                  className="w-full px-3 py-2 bg-transparent focus:outline-none text-foreground placeholder:text-foreground/30"
                />
              </div>
            </div>
            <div className="space-y-4">
              {renderControls()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

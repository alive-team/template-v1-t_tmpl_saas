import { PortfolioConfig } from '@/types/portfolio';
import { PreviewNavbar } from './PreviewNavbar';
import { PreviewLogo } from './PreviewLogo';
import { PreviewSlideshow } from './PreviewSlideshow';
import { PreviewProjects } from './PreviewProjects';
import { PreviewContact } from './PreviewContact';

interface PortfolioPreviewProps {
  config: PortfolioConfig;
}

export function PortfolioPreview({ config }: PortfolioPreviewProps) {
  return (
    <div className="relative min-h-full bg-background text-foreground">
      {config.logo.enabled && <PreviewLogo config={config.logo} />}
      {config.navbar.enabled && <PreviewNavbar config={config.navbar} />}

      <main className={config.navbar.placement === 'left' ? 'ml-48' : ''}>
        {config.slideshow.enabled && <PreviewSlideshow config={config.slideshow} />}
        {config.projects.enabled && <PreviewProjects config={config.projects} />}
        {config.contact.enabled && <PreviewContact config={config.contact} />}
      </main>
    </div>
  );
}

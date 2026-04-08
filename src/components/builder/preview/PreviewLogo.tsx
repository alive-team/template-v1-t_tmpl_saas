import { LogoConfig } from '@/types/portfolio';

interface PreviewLogoProps {
  config: LogoConfig;
}

const placementMap = {
  'top-left': 'left-6',
  'top-center': 'left-1/2 -translate-x-1/2',
  'top-right': 'right-6',
};

export function PreviewLogo({ config }: PreviewLogoProps) {
  return (
    <div
      className={`fixed top-6 z-50 ${placementMap[config.placement]}`}
      style={{ fontSize: `${config.size}px` }}
    >
      {config.type === 'text' ? (
        <div className="font-bold">{config.text || 'Logo'}</div>
      ) : (
        config.imageUrl && (
          <img
            src={config.imageUrl}
            alt="Logo"
            style={{ height: `${config.size}px`, width: 'auto' }}
            className="object-contain"
          />
        )
      )}
    </div>
  );
}

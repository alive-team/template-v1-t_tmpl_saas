import { NavbarConfig } from '@/types/portfolio';

interface PreviewNavbarProps {
  config: NavbarConfig;
}

const fontFamilyMap = {
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  serif: 'Georgia, serif',
  mono: 'monospace',
};

export function PreviewNavbar({ config }: PreviewNavbarProps) {
  const fontFamily = fontFamilyMap[config.font as keyof typeof fontFamilyMap] || fontFamilyMap.system;

  if (config.placement === 'left') {
    return (
      <nav
        className="fixed left-0 top-0 h-full w-48 border-r flex flex-col gap-4 p-6"
        style={{
          backgroundColor: config.background,
          fontSize: `${config.fontSize}px`,
          fontFamily,
        }}
      >
        {config.items.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="hover:opacity-70 transition-opacity"
          >
            {item}
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: config.background,
        fontSize: `${config.fontSize}px`,
        fontFamily,
      }}
    >
      <div
        className={`max-w-7xl mx-auto px-6 py-4 flex gap-8 ${
          config.alignment === 'center' ? 'justify-center' : config.alignment === 'right' ? 'justify-end' : 'justify-start'
        }`}
      >
        {config.items.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className="hover:opacity-70 transition-opacity"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}

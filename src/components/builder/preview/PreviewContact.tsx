import { ContactConfig } from '@/types/portfolio';

interface PreviewContactProps {
  config: ContactConfig;
}

export function PreviewContact({ config }: PreviewContactProps) {
  const buttonClasses = {
    filled: 'bg-primary text-primary-foreground hover:opacity-90',
    outlined: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    text: 'text-primary hover:underline',
  };

  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  const handleClick = () => {
    if (config.action === 'email') {
      window.location.href = `mailto:${config.value}`;
    } else {
      window.open(config.value, '_blank');
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`flex ${alignmentClasses[config.placement]}`}>
          <button
            onClick={handleClick}
            className={`px-6 py-3 rounded-sm transition-all ${buttonClasses[config.buttonStyle]}`}
          >
            {config.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

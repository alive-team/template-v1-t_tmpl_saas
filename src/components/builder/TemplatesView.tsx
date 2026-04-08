interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

interface TemplateCategory {
  title: string;
  templates: Template[];
}

const templateCategories: TemplateCategory[] = [
  {
    title: 'Super-minimal / Single-page',
    templates: [
      {
        id: 'pure-cover',
        name: 'Pure Cover',
        description: 'Hero image, name/logo, 1-sentence bio, contact',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=450&fit=crop',
      },
      {
        id: 'gallery-showcase',
        name: 'Gallery Showcase',
        description: 'Logo + horizontal image slideshow + email',
        thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=450&fit=crop',
      },
      {
        id: 'business-card',
        name: 'Business Card',
        description: 'Just logo, tagline, CTA',
        thumbnail: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=450&fit=crop',
      },
      {
        id: 'video-cover',
        name: 'Video Cover',
        description: 'Full-screen video header with name + contact',
        thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop',
      },
    ],
  },
  {
    title: 'Classic Portfolio',
    templates: [
      {
        id: 'project-grid',
        name: 'Project Grid',
        description: 'Masonry or equal tiles, thumbnails → project detail',
        thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=450&fit=crop',
      },
      {
        id: 'studio-wall',
        name: 'Studio Wall',
        description: 'Mixed-size cards (like pinned works)',
        thumbnail: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=450&fit=crop',
      },
      {
        id: 'category-grid',
        name: 'Category Grid',
        description: 'Top filters (e.g. Product / Spatial / Photo)',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop',
      },
    ],
  },
  {
    title: 'Moodboard / Research',
    templates: [
      {
        id: 'research-log',
        name: 'Research Log',
        description: 'Cards with source, date, tags',
        thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop',
      },
    ],
  },
  {
    title: 'CV / Professional',
    templates: [
      {
        id: 'cv-page',
        name: 'CV Page',
        description: 'Structured CV/resumé page with bio, experience, education',
        thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop',
      },
    ],
  },
  {
    title: 'Team / Multi-creator',
    templates: [
      {
        id: 'collective-wall',
        name: 'Collective Wall',
        description: 'Filter by creator',
        thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=450&fit=crop',
      },
      {
        id: 'studio-roster',
        name: 'Studio Roster',
        description: 'People profiles → individual projects',
        thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop',
      },
      {
        id: 'shared-moodboard',
        name: 'Shared Moodboard',
        description: 'Central inspiration board editable by team',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop',
      },
    ],
  },
];

interface TemplatesViewProps {
  onSelectTemplate: (templateId: string) => void;
}

export function TemplatesView({ onSelectTemplate }: TemplatesViewProps) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mb-8">
        <h2 className="text-foreground mb-2">Choose a Template</h2>
        <p className="text-foreground/40">Select a starting point for your portfolio</p>
      </div>

      <div className="space-y-12">
        {templateCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-foreground/60 mb-6">{category.title}</h3>
            <div className="grid grid-cols-3 gap-6">
              {category.templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => onSelectTemplate(template.id)}
                  className="group text-left border border-border/40 hover:border-foreground/40 transition-colors overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-foreground/5 relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'linear-gradient(135deg, transparent 48%, hsl(var(--foreground) / 0.15) 48%, hsl(var(--foreground) / 0.15) 52%, transparent 52%)'
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground mb-1">{template.name}</h3>
                    <p className="text-foreground/40">{template.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ProjectsConfig } from '@/types/portfolio';

interface ProjectsControlsProps {
  config: ProjectsConfig;
  onChange: (config: ProjectsConfig) => void;
}

export function ProjectsControls({ config, onChange }: ProjectsControlsProps) {
  return (
    <div className="space-y-4">
      {config.enabled && (
        <>
          <div className="space-y-2">
            <label className="text-foreground/60">Layout</label>
            <div className="flex gap-1">
              {(['grid', 'list'] as const).map((layout) => (
                <button
                  key={layout}
                  onClick={() => onChange({ ...config, layout })}
                  className={`flex-1 px-3 py-1.5 border border-border/40 transition-colors ${
                    config.layout === layout
                      ? 'bg-foreground text-background'
                      : 'text-foreground/60 hover:text-foreground hover:border-foreground/60'
                  }`}
                >
                  {layout.charAt(0).toUpperCase() + layout.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {config.layout === 'grid' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-foreground/60">Columns</label>
                <input
                  type="number"
                  min="1"
                  max="4"
                  value={config.columns}
                  onChange={(e) => onChange({ ...config, columns: parseInt(e.target.value) || 1 })}
                  className="w-16 px-2 py-1 text-right bg-transparent border border-border/40 focus:outline-none focus:border-foreground/60 transition-colors"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-foreground/60">Show Tags</label>
              <input
                type="checkbox"
                checked={config.showTags}
                onChange={(e) => onChange({ ...config, showTags: e.target.checked })}
                className="h-3 w-3"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-border/40" />

          <div className="space-y-2">
            <label className="text-foreground/60">Projects ({config.projects.length})</label>
            <p className="text-foreground/40">
              Use the chat to add, edit, or remove projects
            </p>
            <div className="space-y-1 max-h-64 overflow-y-auto border border-border/40 p-2">
              {config.projects.map((project) => (
                <div key={project.id} className="p-2 border border-border/40">
                  <div className="text-foreground">{project.title}</div>
                  <div className="text-foreground/60">{project.description}</div>
                  {config.showTags && project.tags.length > 0 && (
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-1.5 py-0.5 border border-border/40 text-foreground/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {config.projects.length === 0 && (
                <div className="text-foreground/40 text-center py-4">
                  No projects yet
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

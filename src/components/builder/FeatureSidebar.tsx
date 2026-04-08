import { useState } from 'react';
import { FeatureType } from '@/types/portfolio';
import { LayoutDashboard, Type, Images, Briefcase, Mail, ChevronDown, ChevronRight } from 'lucide-react';

interface FeatureSidebarProps {
  selectedFeature: FeatureType;
  onSelectFeature: (feature: FeatureType) => void;
  featureStates: Record<FeatureType, { enabled: boolean }>;
  onToggleFeature: (feature: FeatureType) => void;
  showTemplates: boolean;
  onToggleTemplates: () => void;
  isFeaturesExpanded: boolean;
  onToggleFeaturesExpanded: () => void;
}

const websiteFeatures: Array<{
  type: FeatureType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { type: 'navbar', label: 'Navigation Bar / Menu', icon: LayoutDashboard },
  { type: 'logo', label: 'Logo', icon: Type },
  { type: 'contact', label: 'Contact Button', icon: Mail },
];

const page1Features: Array<{
  type: FeatureType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { type: 'slideshow', label: 'Image Slideshow', icon: Images },
];

const page2Features: Array<{
  type: FeatureType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { type: 'projects', label: 'Project Grid Overview', icon: Briefcase },
];

export function FeatureSidebar({ selectedFeature, onSelectFeature, featureStates, onToggleFeature, showTemplates, onToggleTemplates, isFeaturesExpanded, onToggleFeaturesExpanded }: FeatureSidebarProps) {
  const [inputValue, setInputValue] = useState('');
  const [showAddFeatureInput, setShowAddFeatureInput] = useState(false);
  const [newFeatureName, setNewFeatureName] = useState('');
  const [websiteFeaturesExpanded, setWebsiteFeaturesExpanded] = useState(true);
  const [page1FeaturesExpanded, setPage1FeaturesExpanded] = useState(true);
  const [page2FeaturesExpanded, setPage2FeaturesExpanded] = useState(true);

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log('Sending:', inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAddFeature = () => {
    if (newFeatureName.trim()) {
      console.log('Adding feature:', newFeatureName);
      setNewFeatureName('');
      setShowAddFeatureInput(false);
    }
  };

  const handleFeatureKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddFeature();
    } else if (e.key === 'Escape') {
      setShowAddFeatureInput(false);
      setNewFeatureName('');
    }
  };

  return (
    <div className="w-80 border-r border-border/40 flex flex-col h-full bg-foreground/[0.02]" style={{ fontSize: '12px' }}>
      <div className="px-4 py-6 border-b border-border/40">
        <button
          onClick={onToggleTemplates}
          className={`w-full text-left transition-colors ${
            showTemplates
              ? 'text-foreground'
              : 'text-foreground hover:text-foreground/70'
          }`}
        >
          Templates
        </button>
      </div>

      <div className="px-4 py-6 border-b border-border/40">
        <div className="flex items-center justify-between">
          <button
            onClick={onToggleFeaturesExpanded}
            className="flex-1 flex items-center justify-between text-foreground hover:text-foreground/70 transition-colors"
          >
            <span>Website Features</span>
            {isFeaturesExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
          <button
            onClick={() => console.log('Add new page')}
            className="ml-3 w-6 h-6 flex items-center justify-center text-foreground/70 hover:text-foreground bg-white hover:bg-white/90 transition-colors font-medium rounded-full shadow-sm text-sm"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto">
        {isFeaturesExpanded && (
          <div>
            {/* Website Features Section */}
            <div className="border-b border-border/40">
              <button
                onClick={() => setWebsiteFeaturesExpanded(!websiteFeaturesExpanded)}
                className="w-full px-4 py-3 flex items-center justify-between text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                <span>Website Features</span>
                {websiteFeaturesExpanded ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
            </div>
            {websiteFeaturesExpanded && websiteFeatures.map((feature) => {
              const isSelected = selectedFeature === feature.type;
              const isEnabled = featureStates[feature.type]?.enabled;

              return (
                <div
                  key={feature.type}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 transition-colors border-b border-border/40
                    ${isSelected
                      ? 'text-foreground'
                      : 'text-foreground/40'
                    }
                  `}
                >
                  <button
                    onClick={() => onSelectFeature(feature.type)}
                    className="flex-1 text-left hover:text-foreground/70 transition-colors"
                  >
                    {feature.label}
                  </button>
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => {
                      e.stopPropagation();
                      onToggleFeature(feature.type);
                    }}
                    className="h-3 w-3 cursor-pointer accent-foreground"
                  />
                </div>
              );
            })}

            {/* Page 1 Features Section */}
            <div className="border-b border-border/40">
              <button
                onClick={() => setPage1FeaturesExpanded(!page1FeaturesExpanded)}
                className="w-full px-4 py-3 flex items-center justify-between text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                <span>Page 1 Features</span>
                {page1FeaturesExpanded ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
            </div>
            {page1FeaturesExpanded && page1Features.map((feature) => {
              const isSelected = selectedFeature === feature.type;
              const isEnabled = featureStates[feature.type]?.enabled;

              return (
                <div
                  key={feature.type}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 transition-colors border-b border-border/40
                    ${isSelected
                      ? 'text-foreground'
                      : 'text-foreground/40'
                    }
                  `}
                >
                  <button
                    onClick={() => onSelectFeature(feature.type)}
                    className="flex-1 text-left hover:text-foreground/70 transition-colors"
                  >
                    {feature.label}
                  </button>
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => {
                      e.stopPropagation();
                      onToggleFeature(feature.type);
                    }}
                    className="h-3 w-3 cursor-pointer accent-foreground"
                  />
                </div>
              );
            })}

            {/* Page 2 Features Section */}
            <div className="border-b border-border/40">
              <button
                onClick={() => setPage2FeaturesExpanded(!page2FeaturesExpanded)}
                className="w-full px-4 py-3 flex items-center justify-between text-foreground/60 hover:text-foreground/80 transition-colors"
              >
                <span>Page 2 Features</span>
                {page2FeaturesExpanded ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
            </div>
            {page2FeaturesExpanded && page2Features.map((feature) => {
              const isSelected = selectedFeature === feature.type;
              const isEnabled = featureStates[feature.type]?.enabled;

              return (
                <div
                  key={feature.type}
                  className={`
                    w-full flex items-center justify-between px-4 py-3 transition-colors border-b border-border/40
                    ${isSelected
                      ? 'text-foreground'
                      : 'text-foreground/40'
                    }
                  `}
                >
                  <button
                    onClick={() => onSelectFeature(feature.type)}
                    className="flex-1 text-left hover:text-foreground/70 transition-colors"
                  >
                    {feature.label}
                  </button>
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => {
                      e.stopPropagation();
                      onToggleFeature(feature.type);
                    }}
                    className="h-3 w-3 cursor-pointer accent-foreground"
                  />
                </div>
              );
            })}

            <div className="px-4 py-3 border-b border-border/40">
              <div className="relative border border-border/40 bg-foreground/5">
                <input
                  type="text"
                  value={newFeatureName}
                  onChange={(e) => setNewFeatureName(e.target.value)}
                  onKeyDown={handleFeatureKeyPress}
                  placeholder="+ Add a feature"
                  className="w-full px-3 py-2 bg-transparent focus:outline-none text-foreground placeholder:text-foreground/30"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { FeatureType, PortfolioConfig, ChatMessage } from '@/types/portfolio';
import { FeatureSidebar } from '@/components/builder/FeatureSidebar';
import { FeaturePanel } from '@/components/builder/FeaturePanel';
import { TemplatesView } from '@/components/builder/TemplatesView';
import { defaultConfig } from '@/lib/defaultConfig';
import { processAIMessage } from '@/lib/aiService';

// Portfolio Builder - AI-powered website editor
export default function Builder() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureType>('navbar');
  const [config, setConfig] = useState<PortfolioConfig>(defaultConfig);
  const [showTemplates, setShowTemplates] = useState(false);
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(true);
  const [chats, setChats] = useState<Record<FeatureType, ChatMessage[]>>({
    navbar: [],
    logo: [],
    slideshow: [],
    projects: [],
    contact: [],
  });

  const handleConfigChange = (featureType: FeatureType, newConfig: any) => {
    setConfig((prev) => ({
      ...prev,
      [featureType]: newConfig,
    }));
  };

  const handleToggleFeature = (featureType: FeatureType) => {
    setConfig((prev) => ({
      ...prev,
      [featureType]: {
        ...prev[featureType],
        enabled: !prev[featureType].enabled,
      },
    }));
  };

  const handleSendMessage = async (featureType: FeatureType, content: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setChats((prev) => ({
      ...prev,
      [featureType]: [...prev[featureType], userMessage],
    }));

    // Process AI response
    try {
      const { updatedConfig, response } = await processAIMessage(content, featureType, config);

      setConfig(updatedConfig);

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: Date.now(),
      };

      setChats((prev) => ({
        ...prev,
        [featureType]: [...prev[featureType], assistantMessage],
      }));
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request.',
        timestamp: Date.now(),
      };

      setChats((prev) => ({
        ...prev,
        [featureType]: [...prev[featureType], errorMessage],
      }));
    }
  };

  const handleSelectTemplate = (templateId: string) => {
    console.log('Selected template:', templateId);
    // TODO: Load template configuration
    setShowTemplates(false);
  };

  const featureStates = {
    navbar: { enabled: config.navbar.enabled },
    logo: { enabled: config.logo.enabled },
    slideshow: { enabled: config.slideshow.enabled },
    projects: { enabled: config.projects.enabled },
    contact: { enabled: config.contact.enabled },
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="h-14 border-b border-border/40 flex items-center px-4 gap-4 flex-shrink-0">
        <style>{`
          @keyframes strongPulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.3;
              transform: scale(0.85);
            }
          }
        `}</style>
        <div className="relative flex-shrink-0" style={{ marginTop: '1px' }}>
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(57,255,20,0.4) 0%, rgba(57,255,20,0.2) 30%, rgba(57,255,20,0.1) 50%, transparent 70%)',
              width: '20px',
              height: '20px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(4px)'
            }}
          />
          <div
            className="w-2 h-2 rounded-full bg-[#39ff14] shadow-[0_0_40px_rgba(57,255,20,1),0_0_80px_rgba(57,255,20,0.6),0_0_120px_rgba(57,255,20,0.3)] relative z-10"
            style={{
              animation: 'strongPulse 2.5s ease-in-out infinite'
            }}
          />
        </div>
        <span className="text-foreground leading-none" style={{ fontSize: '13px', fontWeight: 500 }}>ali.ve</span>
      </div>

      <div className="flex flex-1 overflow-hidden min-h-0">
        <FeatureSidebar
          selectedFeature={selectedFeature}
          onSelectFeature={setSelectedFeature}
          featureStates={featureStates}
          onToggleFeature={handleToggleFeature}
          showTemplates={showTemplates}
          onToggleTemplates={() => setShowTemplates(!showTemplates)}
          isFeaturesExpanded={isFeaturesExpanded}
          onToggleFeaturesExpanded={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
        />

        {showTemplates ? (
          <TemplatesView onSelectTemplate={handleSelectTemplate} />
        ) : (
          <>
            {isFeaturesExpanded && (
              <FeaturePanel
                featureType={selectedFeature}
                config={config[selectedFeature]}
                messages={chats[selectedFeature]}
                onConfigChange={(newConfig) => handleConfigChange(selectedFeature, newConfig)}
                onSendMessage={(content) => handleSendMessage(selectedFeature, content)}
              />
            )}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              <div className="px-4 py-6 border-b border-border/40">
                <h3 className="text-foreground" style={{ fontSize: '12px' }}>Chat</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="text-foreground space-y-3" style={{ fontSize: '12px' }}>
                  <p>Hello! I'm here to help you build your website.</p>
                  <p>Describe what you'd like to change and I'll customize it for you.</p>
                </div>
              </div>
              <div className="p-4 border-t border-border/40 flex-shrink-0">
                <div className="relative border border-foreground/20 bg-foreground/[0.08] rounded-lg">
                  <input
                    type="text"
                    placeholder="Write anything..."
                    className="w-full px-3 pt-5 pb-14 bg-transparent focus:outline-none placeholder:text-foreground/40 rounded-lg"
                    style={{ fontSize: '12px' }}
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between gap-2">
                    <button
                      onClick={() => console.log('Attachment clicked')}
                      className="w-8 h-8 flex items-center justify-center text-foreground/70 hover:text-foreground bg-white hover:bg-white/90 transition-colors font-medium rounded-full shadow-sm"
                    >
                      +
                    </button>
                    <button
                      onClick={() => console.log('Send clicked')}
                      className="w-8 h-8 flex items-center justify-center text-foreground/70 hover:text-foreground bg-white hover:bg-white/90 transition-colors font-medium rounded-full shadow-sm"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

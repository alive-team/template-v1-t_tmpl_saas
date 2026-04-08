import { FeatureType, PortfolioConfig, ChatMessage } from '@/types/portfolio';

// Mock AI service that simulates intelligent responses
export async function processAIMessage(
  message: string,
  featureType: FeatureType,
  currentConfig: PortfolioConfig
): Promise<{ updatedConfig: PortfolioConfig; response: string }> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));

  const lowerMessage = message.toLowerCase();
  let updatedConfig = { ...currentConfig };
  let response = "I've updated the configuration based on your request.";

  // Simple keyword-based processing (in production, this would be an actual AI API)

  if (featureType === 'navbar') {
    if (lowerMessage.includes('vertical') || lowerMessage.includes('left')) {
      updatedConfig.navbar = { ...updatedConfig.navbar, placement: 'left' };
      response = "I've changed the navigation to a vertical layout on the left side.";
    } else if (lowerMessage.includes('horizontal') || lowerMessage.includes('top')) {
      updatedConfig.navbar = { ...updatedConfig.navbar, placement: 'top' };
      response = "I've changed the navigation to a horizontal layout at the top.";
    }

    if (lowerMessage.includes('center')) {
      updatedConfig.navbar = { ...updatedConfig.navbar, alignment: 'center' };
      response += " The items are now centered.";
    } else if (lowerMessage.includes('right')) {
      updatedConfig.navbar = { ...updatedConfig.navbar, alignment: 'right' };
      response += " The items are now aligned to the right.";
    }

    if (lowerMessage.includes('add') && lowerMessage.includes('about')) {
      if (!updatedConfig.navbar.items.includes('About')) {
        updatedConfig.navbar.items = [...updatedConfig.navbar.items, 'About'];
        response = "I've added an 'About' link to the navigation.";
      }
    }
  }

  if (featureType === 'slideshow') {
    if (lowerMessage.includes('full width') || lowerMessage.includes('cover')) {
      updatedConfig.slideshow = { ...updatedConfig.slideshow, size: 'cover' };
      response = "I've set the slideshow images to cover the full width.";
    }

    if (lowerMessage.includes('faster')) {
      const newDuration = Math.max(2, updatedConfig.slideshow.duration - 2);
      updatedConfig.slideshow = { ...updatedConfig.slideshow, duration: newDuration };
      response = `I've sped up the slideshow to ${newDuration} seconds per slide.`;
    } else if (lowerMessage.includes('slower')) {
      const newDuration = Math.min(10, updatedConfig.slideshow.duration + 2);
      updatedConfig.slideshow = { ...updatedConfig.slideshow, duration: newDuration };
      response = `I've slowed down the slideshow to ${newDuration} seconds per slide.`;
    }
  }

  if (featureType === 'projects') {
    if (lowerMessage.includes('grid') && lowerMessage.includes('3')) {
      updatedConfig.projects = { ...updatedConfig.projects, layout: 'grid', columns: 3 };
      response = "I've changed the projects to a 3-column grid layout.";
    } else if (lowerMessage.includes('list')) {
      updatedConfig.projects = { ...updatedConfig.projects, layout: 'list' };
      response = "I've changed the projects to a list layout.";
    }

    if (lowerMessage.includes('hide tags') || lowerMessage.includes('remove tags')) {
      updatedConfig.projects = { ...updatedConfig.projects, showTags: false };
      response = "I've hidden the project tags.";
    } else if (lowerMessage.includes('show tags')) {
      updatedConfig.projects = { ...updatedConfig.projects, showTags: true };
      response = "I've shown the project tags.";
    }
  }

  if (featureType === 'contact') {
    if (lowerMessage.includes('outlined') || lowerMessage.includes('border')) {
      updatedConfig.contact = { ...updatedConfig.contact, buttonStyle: 'outlined' };
      response = "I've changed the contact button to an outlined style.";
    } else if (lowerMessage.includes('filled') || lowerMessage.includes('solid')) {
      updatedConfig.contact = { ...updatedConfig.contact, buttonStyle: 'filled' };
      response = "I've changed the contact button to a filled style.";
    }
  }

  return { updatedConfig, response };
}

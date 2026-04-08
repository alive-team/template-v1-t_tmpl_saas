export type FeatureType = 'navbar' | 'logo' | 'slideshow' | 'projects' | 'contact';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface NavbarConfig {
  enabled: boolean;
  font: string;
  fontSize: number;
  placement: 'top' | 'left';
  alignment: 'left' | 'center' | 'right';
  background: string;
  items: string[];
}

export interface LogoConfig {
  enabled: boolean;
  type: 'text' | 'image';
  text?: string;
  imageUrl?: string;
  size: number;
  placement: 'top-left' | 'top-center' | 'top-right';
}

export interface SlideshowConfig {
  enabled: boolean;
  images: string[];
  size: 'cover' | 'contain';
  aspectRatio: string;
  position: 'top' | 'center' | 'bottom';
  autoplay: boolean;
  duration: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ProjectsConfig {
  enabled: boolean;
  layout: 'grid' | 'list';
  columns: number;
  showTags: boolean;
  projects: Project[];
}

export interface ContactConfig {
  enabled: boolean;
  buttonText: string;
  buttonStyle: 'filled' | 'outlined' | 'text';
  placement: 'left' | 'center' | 'right';
  action: 'email' | 'link';
  value: string;
}

export interface PortfolioConfig {
  navbar: NavbarConfig;
  logo: LogoConfig;
  slideshow: SlideshowConfig;
  projects: ProjectsConfig;
  contact: ContactConfig;
}

export interface FeatureState {
  config: NavbarConfig | LogoConfig | SlideshowConfig | ProjectsConfig | ContactConfig;
  chat: ChatMessage[];
}

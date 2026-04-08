import { PortfolioConfig } from '@/types/portfolio';

export const defaultConfig: PortfolioConfig = {
  navbar: {
    enabled: true,
    font: 'system',
    fontSize: 14,
    placement: 'top',
    alignment: 'left',
    background: '#ffffff',
    items: ['Home', 'Work', 'About', 'Contact'],
  },
  logo: {
    enabled: true,
    type: 'text',
    text: 'Portfolio',
    imageUrl: '',
    size: 24,
    placement: 'top-left',
  },
  slideshow: {
    enabled: true,
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200',
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200',
    ],
    size: 'cover',
    aspectRatio: '16/9',
    position: 'center',
    autoplay: true,
    duration: 5,
  },
  projects: {
    enabled: true,
    layout: 'grid',
    columns: 2,
    showTags: true,
    projects: [
      {
        id: '1',
        title: 'Modern Web App',
        description: 'A sleek and responsive web application built with React',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
        tags: ['React', 'TypeScript', 'Design'],
      },
      {
        id: '2',
        title: 'Brand Identity',
        description: 'Complete brand redesign for a tech startup',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
        tags: ['Branding', 'Design', 'Identity'],
      },
      {
        id: '3',
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with payment integration',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600',
        tags: ['E-commerce', 'Full-stack', 'UI/UX'],
      },
      {
        id: '4',
        title: 'Mobile App Design',
        description: 'User-centered design for iOS and Android application',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
        tags: ['Mobile', 'UI/UX', 'App Design'],
      },
    ],
  },
  contact: {
    enabled: true,
    buttonText: 'Get in Touch',
    buttonStyle: 'filled',
    placement: 'center',
    action: 'email',
    value: 'hello@example.com',
  },
};

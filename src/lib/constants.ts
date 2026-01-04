import { IconType } from 'react-icons';
import { 
  MapIcon,
  LifebuoyIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

type NavLink = {
  href: string;
  label: string;
};

type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/technology', label: 'Technology' },
  { href: '/api-docs', label: 'API Docs' },
  { href: '/security', label: 'Security' },
  { href: '/testing', label: 'Testing' },
  { href: '/about', label: 'About' },
  { href: '/docs', label: 'Documents' },
  { href: '/backlog', label: 'Backlog' },
  { href: '/contact', label: 'Contact' },
];

export const FEATURES: Feature[] = [
  {
    icon: MapIcon,
    title: 'Real-time Damage Mapping',
    description: 'Visualize affected areas and find safe routes instantly',
  },
  {
    icon: LifebuoyIcon,
    title: 'Rescue Coordination',
    description: 'Coordinate rescue efforts with real-time victim locations',
  },
  {
    icon: ClockIcon,
    title: 'Preparation Mode',
    description: 'Plan evacuation routes and emergency supplies pre-disaster',
  },
];
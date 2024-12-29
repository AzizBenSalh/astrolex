export const SITE_NAME = 'ASTROLEX';
export const SITE_DESCRIPTION = 'Your gateway to exploring the vastness of space, science, and math through interactive learning and real-time data.';

export const HERO_IMAGE = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80';

export const NAV_LINKS = [
  { 
    href: '/', 
    label: 'Home', 
    active: true 
  },
  { 
    href: '/astrolearning', 
    label: 'AstroLearning',
    dropdownItems: [
      {
        label: 'Quiz',
        href: '/astrolearning/quiz',
        description: 'Test your knowledge of astronomy and space'
      },
      {
        label: 'Blog',
        href: '/astrolearning/blog',
        description: 'Read the latest articles and discoveries'
      },
      {
        label: 'Videos',
        href: '/astrolearning/videos',
        description: 'Watch educational space and astronomy videos'
      }
    ]
  },
  { 
    href: '/explore', 
    label: 'Explore',
    dropdownItems: [
      {
        label: 'Events',
        href: '/explore/events',
        description: 'Upcoming astronomical events and phenomena'
      },
      {
        label: 'Solar System',
        href: '/explore/solar-system',
        description: 'Explore our cosmic neighborhood'
      },
      {
        label: 'Universe',
        href: '/explore/universe',
        description: 'Journey through galaxies and cosmic structures'
      },
      {
        label: 'Space Technology',
        href: '/explore/technology',
        description: 'Latest advances in space exploration technology'
      }
    ]
  },
  { 
    href: '/visualization', 
    label: 'Visualisation',
    dropdownItems: [
      {
        label: 'Solar System Model',
        href: '/visualization/solar-system',
        description: 'Interactive 3D model of our solar system'
      },
      {
        label: 'Gravity Simulator',
        href: '/visualization/gravity',
        description: 'Visualize gravitational forces in space'
      },
      {
        label: "Kepler's Laws",
        href: '/visualization/kepler',
        description: 'Interactive demonstration of planetary motion'
      }
    ]
  },
  { href: '/contact', label: 'Contact us' },
  { href: '/about', label: 'About us' }
] as const;

export const QUIZ_CATEGORIES = [
  'Astronomy Fundamentals',
  'Solar System',
  'Galaxies & Universe',
  'Space Technology',
  'Physics in Space',
  'Mathematics in Astronomy',
  'Space Exploration',
  'Celestial Mechanics'
] as const;

export const QUIZ_DIFFICULTIES = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Expert'
] as const;

export const QUIZ_TIME_LIMITS = [10, 15, 20, 30] as const;
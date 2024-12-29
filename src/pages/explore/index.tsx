import { Rocket, Globe2, Telescope, Cpu } from 'lucide-react';
import { FeatureCard } from '../../components/home/FeatureCard';

const features = [
  {
    Icon: Globe2,
    title: 'Solar System',
    description: 'Journey through our cosmic neighborhood and discover the wonders of our solar system.'
  },
  {
    Icon: Telescope,
    title: 'Deep Space',
    description: 'Explore galaxies, nebulae, and the mysteries of the distant universe.'
  },
  {
    Icon: Rocket,
    title: 'Space Events',
    description: 'Stay updated with the latest astronomical events and space missions.'
  },
  {
    Icon: Cpu,
    title: 'Technology',
    description: 'Learn about cutting-edge space technology and exploration tools.'
  }
];

export default function Explore() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Explore Space</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Embark on a virtual journey through space, from our solar system to the 
          farthest reaches of the observable universe. Discover celestial objects, 
          astronomical phenomena, and the latest in space exploration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
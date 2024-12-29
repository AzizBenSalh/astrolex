import { Rocket, Users, History, Target } from 'lucide-react';
import { FeatureCard } from '../../components/home/FeatureCard';

const features = [
  {
    Icon: History,
    title: 'Our Story',
    description: 'Founded by space enthusiasts, ASTROLEX aims to make space education accessible to everyone.'
  },
  {
    Icon: Target,
    title: 'Our Mission',
    description: 'To inspire and educate the next generation of space explorers and scientists.'
  },
  {
    Icon: Users,
    title: 'Our Team',
    description: 'A diverse group of astronomers, educators, and space technology experts.'
  },
  {
    Icon: Rocket,
    title: 'Our Vision',
    description: 'Creating a future where space science is understood and appreciated by all.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">About ASTROLEX</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          ASTROLEX is more than just a platform - it's a community of space enthusiasts, 
          scientists, and learners united by our passion for exploring the cosmos. 
          Our mission is to make space science accessible, engaging, and inspiring for everyone.
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
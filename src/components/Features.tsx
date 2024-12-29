import { Rocket, Planet, Stars, Binary } from 'lucide-react';

const features = [
  {
    icon: Planet,
    title: 'Solar System Explorer',
    description: 'Interactive 3D models of planets, moons, and other celestial bodies in our solar system.'
  },
  {
    icon: Stars,
    title: 'Star Charts',
    description: 'Real-time constellation maps and deep space object catalogs for astronomers.'
  },
  {
    icon: Binary,
    title: 'Space Mathematics',
    description: 'Learn the mathematical principles behind orbital mechanics and cosmic phenomena.'
  },
  {
    icon: Rocket,
    title: 'Space Missions',
    description: 'Track current space missions and explore the history of space exploration.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Explore the Universe</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the wonders of space through our interactive features and comprehensive learning resources.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
              <feature.icon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
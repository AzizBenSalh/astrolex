import { Orbit, Gauge, Ruler } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    Icon: Orbit,
    title: 'Solar System Visualization',
    description: 'Interactive 3D model of planets and their orbits in our solar system.',
    path: '/visualization/solar-system'
  },
  {
    Icon: Gauge,
    title: 'Gravity Simulator',
    description: 'Explore gravitational forces between celestial bodies.',
    path: '/visualization/gravity'
  },
  {
    Icon: Ruler,
    title: "Kepler's Laws",
    description: 'Visualize and understand the laws of planetary motion.',
    path: '/visualization/kepler'
  }
];

export default function Visualization() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Space Visualization</h1>
        <p className="text-gray-300 mb-12 max-w-3xl">
          Experience the cosmos through interactive visualizations and simulations. 
          Understand complex astronomical concepts through intuitive visual representations 
          and real-time models.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              onClick={() => navigate(feature.path)}
              className="bg-gray-800 p-6 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <feature.Icon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
              <div className="mt-4 text-purple-400 flex items-center">
                <span>Explore</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
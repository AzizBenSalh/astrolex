import { useState } from 'react';
import { Rocket, Cpu, Satellite, Telescope } from 'lucide-react';
import { spaceVehicles, marsRovers, satellites, telescopes } from '../../data/technologyData';

const categories = [
  {
    id: 'rockets',
    icon: Rocket,
    title: 'Rockets',
    items: spaceVehicles
  },
  {
    id: 'rovers',
    icon: Cpu,
    title: 'Mars Rovers',
    items: marsRovers
  },
  {
    id: 'satellites',
    icon: Satellite,
    title: 'Satellites',
    items: satellites
  },
  {
    id: 'telescopes',
    icon: Telescope,
    title: 'Ground Telescopes',
    items: telescopes
  }
];

export default function Technology() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeItem, setActiveItem] = useState(categories[0].items[0]);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Space Technology</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the cutting-edge technologies that make space exploration possible, 
            from powerful rockets to sophisticated rovers and advanced telescopes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category);
                setActiveItem(category.items[0]);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                activeCategory.id === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            {activeCategory.items.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  activeItem.name === item.name
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm opacity-75 truncate">{item.description.split('.')[0]}</p>
              </button>
            ))}
          </div>

          <div className="md:col-span-2">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {activeItem.name}
                </h2>
                <p className="text-gray-300 mb-6">{activeItem.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeItem.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-black/50 p-4 rounded-lg text-white"
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Rocket, Cpu, Satellite, Telescope } from 'lucide-react';
import { TechnologyList } from './components/TechnologyList';
import { TechnologyDetails } from './components/TechnologyDetails';
import { spaceVehicles, marsRovers, satellites, telescopes } from '../../../data/technologyData';

const categories = [
  { id: 'rockets', icon: Rocket, title: 'Rockets' },
  { id: 'rovers', icon: Cpu, title: 'Mars Rovers' },
  { id: 'satellites', icon: Satellite, title: 'Satellites' },
  { id: 'telescopes', icon: Telescope, title: 'Ground Telescopes' }
] as const;

export default function Technology() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]['id']>('rockets');
  const [selectedItem, setSelectedItem] = useState(spaceVehicles[0]);

  const handleCategoryChange = (categoryId: typeof categories[number]['id']) => {
    setSelectedCategory(categoryId);
    switch (categoryId) {
      case 'rockets':
        setSelectedItem(spaceVehicles[0]);
        break;
      case 'rovers':
        setSelectedItem(marsRovers[0]);
        break;
      case 'satellites':
        setSelectedItem(satellites[0]);
        break;
      case 'telescopes':
        setSelectedItem(telescopes[0]);
        break;
    }
  };

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
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
                selectedCategory === category.id
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
          <div className="md:col-span-1">
            <TechnologyList
              category={selectedCategory}
              onItemSelect={setSelectedItem}
            />
          </div>

          <div className="md:col-span-2">
            <TechnologyDetails item={selectedItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
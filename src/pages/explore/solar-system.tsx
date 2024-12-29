import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const celestialBodies = [
  {
    name: 'The Sun',
    type: 'Star',
    image: 'https://th.bing.com/th/id/R.ed1f7808726252aabeda4a42dc9f6bea?rik=%2bCcgntCFH7UAYQ&pid=ImgRaw&r=0',
    description: 'The Sun is the star at the heart of our solar system, providing light and energy to all planets.',
    facts: [
      'Mass: 333,000 times Earth mass',
      'Surface Temperature: 5,500°C',
      'Core Temperature: 15 million°C',
      'Age: 4.6 billion years',
      'Diameter: 1.39 million km'
    ]
  },
  {
    name: 'Mercury',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'The smallest and innermost planet in the Solar System, Mercury experiences extreme temperature variations.',
    facts: [
      'Distance from Sun: 57.9 million km',
      'Surface Temperature: -180°C to 430°C',
      'Day length: 176 Earth days',
      'Diameter: 4,879 km',
      'No moons'
    ]
  },
  {
    name: 'Venus',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Often called Earth\'s sister planet due to similar size, Venus has a toxic atmosphere and extreme greenhouse effect.',
    facts: [
      'Distance from Sun: 108.2 million km',
      'Surface Temperature: 462°C',
      'Day length: 243 Earth days',
      'Diameter: 12,104 km',
      'Rotates backwards'
    ]
  },
  {
    name: 'Earth',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Our home planet, Earth is the only known planet to support life, with liquid water and breathable atmosphere.',
    facts: [
      'Distance from Sun: 149.6 million km',
      'Surface Temperature: -88°C to 58°C',
      'Day length: 24 hours',
      'Diameter: 12,742 km',
      'One natural satellite: Moon'
    ]
  },
  {
    name: 'Moon',
    type: 'Natural Satellite',
    image: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Earth\'s only natural satellite, the Moon influences our tides and has been visited by humans.',
    facts: [
      'Distance from Earth: 384,400 km',
      'Surface Temperature: -233°C to 123°C',
      'Orbital Period: 27.3 days',
      'Diameter: 3,475 km',
      'No atmosphere'
    ]
  },
  {
    name: 'Mars',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'The Red Planet, Mars is a cold desert world with potential for future human exploration.',
    facts: [
      'Distance from Sun: 227.9 million km',
      'Surface Temperature: -140°C to 20°C',
      'Day length: 24 hours 37 minutes',
      'Diameter: 6,779 km',
      'Two moons: Phobos and Deimos'
    ]
  },
  {
    name: 'Jupiter',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'The largest planet in our solar system, Jupiter is a gas giant with a Great Red Spot storm.',
    facts: [
      'Distance from Sun: 778.5 million km',
      'Temperature at clouds: -110°C',
      'Day length: 10 hours',
      'Diameter: 139,820 km',
      '79 known moons'
    ]
  },
  {
    name: 'Saturn',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614314107768-6018061c8d5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Famous for its spectacular ring system, Saturn is a gas giant with numerous moons.',
    facts: [
      'Distance from Sun: 1.4 billion km',
      'Temperature at clouds: -140°C',
      'Day length: 10.7 hours',
      'Diameter: 116,460 km',
      '82 known moons'
    ]
  },
  {
    name: 'Uranus',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'An ice giant that rotates on its side, Uranus has a unique appearance among planets.',
    facts: [
      'Distance from Sun: 2.9 billion km',
      'Temperature at clouds: -220°C',
      'Day length: 17.2 hours',
      'Diameter: 50,724 km',
      '27 known moons'
    ]
  },
  {
    name: 'Neptune',
    type: 'Planet',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'The windiest planet, Neptune is a distant ice giant with supersonic storms.',
    facts: [
      'Distance from Sun: 4.5 billion km',
      'Temperature at clouds: -230°C',
      'Day length: 16.1 hours',
      'Diameter: 49,244 km',
      '14 known moons'
    ]
  },
  {
    name: 'Pluto',
    type: 'Dwarf Planet',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Once considered the ninth planet, Pluto is now classified as a dwarf planet in the Kuiper Belt.',
    facts: [
      'Distance from Sun: 5.9 billion km',
      'Surface Temperature: -230°C',
      'Day length: 6.4 Earth days',
      'Diameter: 2,377 km',
      '5 known moons'
    ]
  },
  {
    name: 'Asteroid Belt',
    type: 'Region',
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'A region between Mars and Jupiter containing millions of rocky objects.',
    facts: [
      'Location: 2.2 to 3.2 AU from Sun',
      'Largest object: Ceres (940 km)',
      'Total mass: 4% of Moon\'s mass',
      'Age: 4.6 billion years',
      'Contains millions of asteroids'
    ]
  }
];

export default function SolarSystem() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextBody = () => {
    setActiveIndex((current) => (current + 1) % celestialBodies.length);
  };

  const previousBody = () => {
    setActiveIndex((current) => 
      current === 0 ? celestialBodies.length - 1 : current - 1
    );
  };

  const activeBody = celestialBodies[activeIndex];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Solar System Explorer</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Journey through our cosmic neighborhood and discover the unique characteristics 
            of each celestial body in our solar system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-2">
            {celestialBodies.map((body, index) => (
              <button
                key={body.name}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 rounded-lg transition-colors ${
                  index === activeIndex
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {body.name}
              </button>
            ))}
          </div>

          <div className="lg:col-span-9">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={activeBody.image}
                  alt={activeBody.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <button
                  onClick={previousBody}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                
                <button
                  onClick={nextBody}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">{activeBody.name}</h2>
                  <span className="px-4 py-1 bg-purple-600 text-white rounded-full text-sm">
                    {activeBody.type}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  {activeBody.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {activeBody.facts.map((fact, index) => (
                    <div
                      key={index}
                      className="bg-black/50 p-4 rounded-lg text-white"
                    >
                      {fact}
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
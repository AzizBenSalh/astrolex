import { useState } from 'react';
import { universeData } from '../../data/universeData';
import { TopicButton } from '../../components/universe/TopicButton';
import { ItemButton } from '../../components/universe/ItemButton';
import { ItemDetails } from '../../components/universe/ItemDetails';

export default function Universe() {
  const topics = Object.values(universeData);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [selectedItem, setSelectedItem] = useState(topics[0].items[0]);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">The Universe</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the most fascinating phenomena in our universe, from galaxies and black holes 
            to mysterious exoplanets and cosmic structures.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {topics.map((topic) => (
            <TopicButton
              key={topic.id}
              id={topic.id}
              title={topic.title}
              isSelected={selectedTopic.id === topic.id}
              onClick={() => {
                setSelectedTopic(topic);
                setSelectedItem(topic.items[0]);
              }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3 space-y-2">
            {selectedTopic.items.map((item) => (
              <ItemButton
                key={item.name}
                name={item.name}
                isSelected={selectedItem.name === item.name}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </div>

          <div className="lg:col-span-9">
            <ItemDetails {...selectedItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
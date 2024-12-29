import { useState } from 'react';
import { TechnologyCard } from './TechnologyCard';
import { spaceVehicles, marsRovers, satellites, telescopes } from '../../../../data/technologyData';

interface TechnologyItem {
  name: string;
  image: string;
  description: string;
  specs: string[];
}

interface TechnologyListProps {
  category: 'rockets' | 'rovers' | 'satellites' | 'telescopes';
  onItemSelect: (item: TechnologyItem) => void;
}

export function TechnologyList({ category, onItemSelect }: TechnologyListProps) {
  const [selectedItem, setSelectedItem] = useState<TechnologyItem | null>(null);

  const getCategoryData = () => {
    switch (category) {
      case 'rockets':
        return spaceVehicles;
      case 'rovers':
        return marsRovers;
      case 'satellites':
        return satellites;
      case 'telescopes':
        return telescopes;
      default:
        return [];
    }
  };

  const items = getCategoryData();

  const handleItemClick = (item: TechnologyItem) => {
    setSelectedItem(item);
    onItemSelect(item);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <TechnologyCard
          key={item.name}
          item={item}
          isSelected={selectedItem?.name === item.name}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  );
}
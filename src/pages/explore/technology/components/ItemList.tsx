interface TechItem {
  name: string;
  description: string;
}

interface ItemListProps {
  items: TechItem[];
  activeItem: TechItem;
  onItemSelect: (item: TechItem) => void;
}

export function ItemList({ items, activeItem, onItemSelect }: ItemListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onItemSelect(item)}
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
  );
}
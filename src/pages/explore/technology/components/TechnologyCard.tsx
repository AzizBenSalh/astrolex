interface TechnologyCardProps {
  item: {
    name: string;
    description: string;
  };
  isSelected: boolean;
  onClick: () => void;
}

export function TechnologyCard({ item, isSelected, onClick }: TechnologyCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-6 rounded-lg transition-all ${
        isSelected
          ? 'bg-purple-600 text-white'
          : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
      <p className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-400'}`}>
        {item.description}
      </p>
    </button>
  );
}
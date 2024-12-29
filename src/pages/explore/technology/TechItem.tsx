interface TechItemProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export function TechItem({ name, isSelected, onClick }: TechItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-colors ${
        isSelected
          ? 'bg-purple-600 text-white'
          : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
      }`}
    >
      {name}
    </button>
  );
}
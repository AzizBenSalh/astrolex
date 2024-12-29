import { LucideIcon } from 'lucide-react';

interface TechCategoryProps {
  id: string;
  icon: LucideIcon;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export function TechCategory({ icon: Icon, title, isSelected, onClick }: TechCategoryProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-colors ${
        isSelected
          ? 'bg-purple-600 text-white'
          : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{title}</span>
    </button>
  );
}
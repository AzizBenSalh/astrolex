import { LucideIcon } from 'lucide-react';

interface Category {
  id: string;
  icon: LucideIcon;
  title: string;
  items: any[];
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category)}
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
  );
}
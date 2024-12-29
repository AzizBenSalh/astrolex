import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-gray-900 text-white px-4 py-1 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Search..."
      />
      <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
    </div>
  );
}
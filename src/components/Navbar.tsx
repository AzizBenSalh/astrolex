import { Menu, Search } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/20 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-2xl font-bold">ASTROLEX</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">AstroLearning</a>
                <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Explore</a>
                <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Visualisation</a>
                <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">Contact us</a>
                <a href="#" className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium">About us</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  className="bg-gray-900 text-white px-4 py-1 rounded-full pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Search..."
                />
                <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="bg-purple-600 text-white px-4 py-1 rounded-full hover:bg-purple-700 transition-colors">
                Log in
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">AstroLearning</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Explore</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Visualisation</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Contact us</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">About us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
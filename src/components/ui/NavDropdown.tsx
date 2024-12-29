import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
  children: ReactNode;
}

export function NavDropdown({ items, children }: NavDropdownProps) {
  return (
    <div className="group relative">
      {children}
      <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
        <div className="bg-gray-900 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="p-2 space-y-1">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                <div className="text-white font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-gray-400 text-sm">{item.description}</div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
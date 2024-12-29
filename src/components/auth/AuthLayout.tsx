import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Left side - Form */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-2xl font-bold text-white">
              <Rocket className="h-8 w-8 text-purple-500 mr-2" />
              ASTROLEX
            </Link>
            <h2 className="mt-6 text-3xl font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative flex-1">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Space background"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <blockquote className="max-w-xl">
              <p className="text-xl font-medium text-white">
                "The universe is not only queerer than we suppose, but queerer than we can suppose."
              </p>
              <footer className="mt-4">
                <p className="text-base font-medium text-purple-400">J.B.S. Haldane</p>
                <p className="text-sm text-gray-400">Evolutionary Biologist</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
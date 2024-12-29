import { ReactNode } from 'react';

interface TopicCardProps {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function TopicCard({ title, description, children, className = '' }: TopicCardProps) {
  return (
    <div className={`bg-gray-900 rounded-lg overflow-hidden hover:shadow-purple-500/20 hover:shadow-lg transition-all ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
}
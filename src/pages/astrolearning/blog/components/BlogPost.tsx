import { format } from 'date-fns';

interface BlogPostProps {
  title: string;
  date: string;
  content: string;
  image: string;
  source: 'NASA' | 'Wikipedia';
}

export function BlogPost({ title, date, content, image, source }: BlogPostProps) {
  return (
    <article className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-shadow">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full md:h-full md:w-96 object-cover"
            src={image}
            alt={title}
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80';
            }}
          />
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <time className="text-purple-400 text-sm">
              {format(new Date(date), 'MMMM d, yyyy')}
            </time>
            <span className={`px-3 py-1 rounded-full text-sm ${
              source === 'NASA' 
                ? 'bg-blue-600 text-white' 
                : 'bg-green-600 text-white'
            }`}>
              {source}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300">
              {content}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
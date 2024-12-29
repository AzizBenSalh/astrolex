import { useNavigate } from 'react-router-dom';
import { Brain, Newspaper, Play } from 'lucide-react';

const sections = [
  {
    icon: Brain,
    title: 'Quiz',
    description: 'Test your knowledge of astronomy, space science, and cosmic phenomena',
    path: '/astrolearning/quiz',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80'
  },
  {
    icon: Newspaper,
    title: 'Blog',
    description: 'Read comprehensive articles about astronomy, physics, and space science',
    path: '/astrolearning/blog',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80'
  },
  {
    icon: Play,
    title: 'Videos',
    description: 'Watch educational videos about space, astronomy, and cosmic phenomena',
    path: '/astrolearning/videos',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2048&q=80'
  }
];

export default function AstroLearning() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AstroLearning</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Embark on a journey through space and time. Our comprehensive learning platform 
            offers everything from fundamental concepts to advanced theories in astronomy 
            and space science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div
              key={section.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => navigate(section.path)}
            >
              <div className="absolute inset-0">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              
              <div className="relative p-8 h-full flex flex-col justify-end">
                <div className="mb-4">
                  <section.icon className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-300">
                  {section.description}
                </p>
                <div className="mt-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button className="inline-flex items-center text-purple-400 hover:text-purple-300">
                    Explore Now
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
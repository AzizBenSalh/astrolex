import { useState, useEffect } from 'react';
import { wikiApi } from '../../../services/wikiApi';
import { nasaApi } from '../../../services/nasaApi';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';

interface TopicContent {
  title: string;
  content: string;
  images: string[];
  references: string[];
  nasaImages: any[];
}

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState('Celestial mechanics');
  const [content, setContent] = useState<TopicContent | null>(null);
  const [loading, setLoading] = useState(true);

  const topics = [
    'Celestial mechanics',
    'Astrophysics',
    'Cosmology',
    'Stellar evolution',
    'Planetary science',
    'Space exploration',
    'Astronomical instruments'
  ];

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        const [wikiData, nasaImages] = await Promise.all([
          wikiApi.getArticle(selectedTopic),
          nasaApi.searchImages(selectedTopic)
        ]);

        setContent({
          title: selectedTopic,
          content: wikiData.content.join('\n'),
          images: wikiData.images,
          references: wikiData.references,
          nasaImages: nasaImages.slice(0, 5)
        });
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [selectedTopic]);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Astronomy Topics</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore in-depth articles about various aspects of astronomy and space science,
            enriched with NASA imagery and comprehensive explanations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedTopic === topic
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
            ) : content ? (
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">{content.title}</h2>
                  
                  {content.nasaImages.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {content.nasaImages.map((item: any, index: number) => (
                        <div key={index} className="relative aspect-video">
                          <img
                            src={item.links[0].href}
                            alt={item.data[0].title}
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown 
                      remarkPlugins={[remarkMath, remarkGfm]}
                      className="text-gray-300"
                    >
                      {content.content}
                    </ReactMarkdown>
                  </div>

                  {content.references.length > 0 && (
                    <div className="mt-8 border-t border-gray-800 pt-8">
                      <h3 className="text-xl font-bold text-white mb-4">References</h3>
                      <ul className="space-y-2">
                        {content.references.map((ref, index) => (
                          <li key={index} className="text-gray-400 text-sm">
                            {ref}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400">No content available</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { nasaApi } from '../../../services/nasaApi';
import { wikiApi } from '../../../services/wikiApi';
import { BlogPost } from './components/BlogPost';

interface Post {
  title: string;
  date: string;
  content: string;
  image: string;
  source: 'NASA' | 'Wikipedia';
}

const WIKI_TOPICS = ['Astronomy', 'Astrophysics', 'Space exploration'];

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const [apodData, ...wikiArticles] = await Promise.all([
          nasaApi.getAPOD(5),
          ...WIKI_TOPICS.map(topic => wikiApi.getArticle(topic))
        ]);

        const nasaPosts = apodData.map((item: any) => ({
          title: item.title,
          date: item.date,
          content: item.explanation,
          image: item.url,
          source: 'NASA' as const
        }));

        const wikiPosts = wikiArticles.map((article: any, index: number) => ({
          title: article.title,
          date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          content: article.content,
          image: article.image,
          source: 'Wikipedia' as const
        }));

        setPosts([...nasaPosts, ...wikiPosts].sort((a, b) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        ));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Astronomy Blog</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest discoveries, research, and insights from NASA 
            and the astronomical community.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid gap-8">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
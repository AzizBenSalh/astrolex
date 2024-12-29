import { QUIZ_CATEGORIES } from '../../utils/constants';

interface TopicStatsProps {
  topicsAttempted: Record<string, number>;
  favoriteTopic?: string;
  onSelectFavorite: (topic: string) => void;
}

export function TopicStats({ 
  topicsAttempted, 
  favoriteTopic,
  onSelectFavorite 
}: TopicStatsProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-white mb-6">Topics Progress</h2>
      <div className="space-y-4">
        {QUIZ_CATEGORIES.map((topic) => {
          const attempts = topicsAttempted[topic] || 0;
          const isTopicFavorite = favoriteTopic === topic;
          
          return (
            <div key={topic} className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">{topic}</span>
                  <span className="text-purple-400">{attempts} attempts</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-purple-600 rounded-full h-2 transition-all"
                    style={{ width: `${Math.min((attempts / 10) * 100, 100)}%` }}
                  />
                </div>
              </div>
              <button
                onClick={() => onSelectFavorite(topic)}
                className={`ml-4 p-2 rounded-full transition-colors ${
                  isTopicFavorite 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                ★
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
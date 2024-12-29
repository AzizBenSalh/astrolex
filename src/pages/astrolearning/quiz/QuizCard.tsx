interface QuizCardProps {
  category: string;
  difficulty: string;
  timeLimit: number;
  questionCount: number;
  onStart: () => void;
}

export function QuizCard({ 
  category, 
  difficulty, 
  timeLimit, 
  questionCount, 
  onStart 
}: QuizCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-purple-500/20 hover:shadow-lg transition-all">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{category}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${
            difficulty === 'Beginner' ? 'bg-green-600' :
            difficulty === 'Intermediate' ? 'bg-yellow-600' :
            difficulty === 'Advanced' ? 'bg-orange-600' :
            'bg-red-600'
          } text-white`}>
            {difficulty}
          </span>
        </div>
        
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-gray-400">
            <span>Time Limit:</span>
            <span>{timeLimit} minutes</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Questions:</span>
            <span>{questionCount}</span>
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
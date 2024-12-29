import { QuizDifficulty } from '../../types/quiz';

interface QuizCardProps {
  title: string;
  difficulty: QuizDifficulty;
  timeLimit: number;
  questionCount: number;
  score: number | null;
  onStart: () => void;
}

export function QuizCard({ 
  title, 
  difficulty, 
  timeLimit, 
  questionCount, 
  score,
  onStart 
}: QuizCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-600',
    Intermediate: 'bg-yellow-600',
    Advanced: 'bg-orange-600',
    Expert: 'bg-red-600'
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className={`inline-block mt-2 px-3 py-1 ${difficultyColors[difficulty]} text-white text-sm rounded-full`}>
            {difficulty}
          </span>
        </div>
        {score !== null && (
          <div className="text-right">
            <span className="text-purple-400 font-bold">Score: {score}</span>
          </div>
        )}
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-400">
          <span>Time Limit:</span>
          <span>{timeLimit / 60} minutes</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Questions:</span>
          <span>{questionCount}</span>
        </div>
      </div>

      <button
        onClick={onStart}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Start Quiz
      </button>
    </div>
  );
}
import { format } from 'date-fns';
import { QuizResultProps } from '../../types/quiz';

export function QuizResult({ result, questions, userAnswers, onRetry }: QuizResultProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-orange-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-white';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
        <div className="space-y-2">
          <p className="text-2xl text-purple-400">Score: {result.score} points</p>
          <p className={`text-lg ${getDifficultyColor(result.difficulty)}`}>
            Difficulty: {result.difficulty}
          </p>
          <p className="text-gray-400">
            Correct Answers: {result.correctAnswers} / {result.totalQuestions}
          </p>
          <p className="text-gray-400">
            Time Spent: {format(result.timeSpent * 1000, 'mm:ss')}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {questions.map((question, index) => (
          <div
            key={question.id}
            className={`p-6 rounded-lg ${
              userAnswers[index] === question.correctAnswer
                ? 'bg-green-900/20'
                : 'bg-red-900/20'
            }`}
          >
            <h4 className="font-semibold text-white mb-2">{question.question}</h4>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className={`p-3 rounded ${
                    optionIndex === question.correctAnswer
                      ? 'bg-green-600/20 text-green-400'
                      : optionIndex === userAnswers[index]
                      ? 'bg-red-600/20 text-red-400'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onRetry}
        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
      >
        Try Another Quiz
      </button>
    </div>
  );
}
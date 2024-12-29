import { format } from 'date-fns';
import { QuizResultProps } from '../../../types/quiz';
import { DifficultyBadge } from './DifficultyBadge';
import { QuestionReview } from './QuestionReview';

export function QuizResult({ result, questions, userAnswers, onRetry }: QuizResultProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
        <div className="space-y-2">
          <p className="text-2xl text-purple-400">Score: {result.score} points</p>
          <DifficultyBadge difficulty={result.difficulty} />
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
          <QuestionReview
            key={question.id}
            question={question}
            userAnswer={userAnswers[index]}
          />
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
import { Question } from '../../../types/quiz';

interface QuestionReviewProps {
  question: Question;
  userAnswer: number | null;
}

export function QuestionReview({ question, userAnswer }: QuestionReviewProps) {
  return (
    <div
      className={`p-6 rounded-lg ${
        userAnswer === question.correctAnswer
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
                : optionIndex === userAnswer
                ? 'bg-red-600/20 text-red-400'
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
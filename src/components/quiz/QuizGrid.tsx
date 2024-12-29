import { QuizCard } from './QuizCard';
import { QuizCategory } from '../../types/quiz';

interface QuizGridProps {
  categories: QuizCategory[];
  onStartQuiz: (categoryId: string) => void;
}

export function QuizGrid({ categories, onStartQuiz }: QuizGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {categories.map((category) => (
        <QuizCard
          key={category.id}
          title={category.title}
          difficulty={category.difficulty}
          timeLimit={category.timeLimit / 60} // Convert seconds to minutes
          questionCount={category.questions.length}
          onStart={() => onStartQuiz(category.id)}
        />
      ))}
    </div>
  );
}
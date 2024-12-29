import { QuizDifficulty } from '../../../types/quiz';

interface DifficultyBadgeProps {
  difficulty: QuizDifficulty;
}

export function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
  const getDifficultyColor = (difficulty: QuizDifficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-orange-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-white';
    }
  };

  return (
    <p className={`text-lg ${getDifficultyColor(difficulty)}`}>
      Difficulty: {difficulty}
    </p>
  );
}
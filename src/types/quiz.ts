export type QuizDifficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizCategory {
  id: string;
  title: string;
  description: string;
  difficulty: QuizDifficulty;
  timeLimit: number;
  questions: Question[];
  pointsPerQuestion: number;
}

export interface QuizResult {
  categoryId: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  difficulty: QuizDifficulty;
}

export interface QuizResultProps {
  result: QuizResult;
  questions: Question[];
  userAnswers: (number | null)[];
  onRetry: () => void;
}
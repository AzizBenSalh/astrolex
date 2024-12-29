import { QuizCategory } from '../../types/quiz';

export const mathematicsInAstronomy: QuizCategory = {
  id: 'mathematics-in-astronomy',
  title: 'Mathematics in Astronomy',
  description: 'Test your understanding of mathematical concepts used in astronomy',
  difficulty: 'Intermediate',
  timeLimit: 900, // 15 minutes
  pointsPerQuestion: 20,
  questions: [
    {
      id: 1,
      question: 'Which mathematical equation describes the relationship between orbital period and semi-major axis?',
      options: ["Kepler's Third Law", "Newton's Second Law", "Einstein's Field Equations", "Hubble's Law"],
      correctAnswer: 0
    },
    // Add more mathematics questions...
  ]
};
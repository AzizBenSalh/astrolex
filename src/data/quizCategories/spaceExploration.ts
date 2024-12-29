import { QuizCategory } from '../../types/quiz';

export const spaceExploration: QuizCategory = {
  id: 'space-exploration',
  title: 'Space Exploration',
  description: 'Test your knowledge about space missions and exploration history',
  difficulty: 'Advanced',
  timeLimit: 1200, // 20 minutes
  pointsPerQuestion: 30,
  questions: [
    {
      id: 1,
      question: 'Which space mission first landed humans on the Moon?',
      options: ['Apollo 11', 'Apollo 8', 'Gemini 4', 'Mercury 7'],
      correctAnswer: 0
    },
    // Add more space exploration questions...
  ]
};
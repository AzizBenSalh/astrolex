import { QuizCategory } from '../../types/quiz';

export const celestialMechanics: QuizCategory = {
  id: 'celestial-mechanics',
  title: 'Celestial Mechanics',
  description: 'Challenge yourself with advanced concepts in orbital mechanics',
  difficulty: 'Expert',
  timeLimit: 1800, // 30 minutes
  pointsPerQuestion: 50,
  questions: [
    {
      id: 1,
      question: 'What is the Lagrange point L1 in the Earth-Sun system?',
      options: [
        'A point where gravitational forces balance',
        'The highest point in Earth\'s orbit',
        'The point closest to the Sun',
        'The point of maximum velocity'
      ],
      correctAnswer: 0
    },
    // Add more celestial mechanics questions...
  ]
};
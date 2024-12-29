import { QuizCategory } from '../../types/quiz';

export const physicsInSpace: QuizCategory = {
  id: 'physics-in-space',
  title: 'Physics in Space',
  description: 'Explore the fundamental physics governing space and celestial bodies',
  difficulty: 'Beginner',
  timeLimit: 600, // 10 minutes
  pointsPerQuestion: 10,
  questions: [
    {
      id: 1,
      question: 'What is the primary force that governs the motion of celestial bodies?',
      options: ['Gravity', 'Electromagnetic force', 'Strong nuclear force', 'Weak nuclear force'],
      correctAnswer: 0
    },
    // Add more physics questions...
  ]
};
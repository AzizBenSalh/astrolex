import { QuizCategory } from '../../types/quiz';

export const solarSystem: QuizCategory = {
  id: 'solar-system',
  title: 'Solar System Quiz',
  description: 'Test your knowledge about our cosmic neighborhood',
  difficulty: 'Intermediate',
  timeLimit: 900, // 15 minutes
  pointsPerQuestion: 20,
  questions: [
    {
      id: 1,
      question: 'How many planets are there in the Solar System?',
      options: ['7', '8', '9', '10'],
      correctAnswer: 1
    },
    {
      id: 2,
      question: 'Which planet is closest to the Sun?',
      options: ['Venus', 'Mercury', 'Earth', 'Mars'],
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'Which planet is known for its prominent ring system?',
      options: ['Jupiter', 'Uranus', 'Saturn', 'Neptune'],
      correctAnswer: 2
    },
    {
      id: 4,
      question: 'What is the smallest planet in the Solar System?',
      options: ['Mars', 'Mercury', 'Pluto', 'Venus'],
      correctAnswer: 1
    },
    {
      id: 5,
      question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
      options: ['Venus', 'Mars', 'Mercury', 'Jupiter'],
      correctAnswer: 0
    },
    {
      id: 6,
      question: 'Which planet has the most moons?',
      options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
      correctAnswer: 0
    },
    {
      id: 7,
      question: 'What is the main component of the atmosphere of Mars?',
      options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Methane'],
      correctAnswer: 2
    },
    {
      id: 8,
      question: 'Which planet has a day longer than its year?',
      options: ['Venus', 'Mercury', 'Neptune', 'Mars'],
      correctAnswer: 0
    },
    {
      id: 9,
      question: 'What is the largest moon in the Solar System?',
      options: ['Europa', 'Titan', 'Ganymede', 'Io'],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "What is the name of the boundary marking the end of the Sun's influence in the Solar System?",
      options: ['Kuiper Belt', 'Oort Cloud', 'Heliosphere', 'Heliopause'],
      correctAnswer: 3
    }
  ]
};
import { QuizCategory } from '../../types/quiz';

export const astronomyFundamentals: QuizCategory = {
  id: 'astronomy-fundamentals',
  title: 'Astronomy Fundamentals',
  description: 'Test your knowledge of basic astronomical concepts',
  difficulty: 'Beginner',
  timeLimit: 600, // 10 minutes
  pointsPerQuestion: 10,
  questions: [
    {
      id: 1,
      question: 'What is the largest planet in our Solar System?',
      options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
      correctAnswer: 1
    },
    {
      id: 2,
      question: 'Which celestial body is known as the "Red Planet"?',
      options: ['Mars', 'Venus', 'Mercury', 'Pluto'],
      correctAnswer: 0
    },
    {
      id: 3,
      question: "What is the primary fuel for the Sun's energy production?",
      options: ['Oxygen', 'Carbon', 'Hydrogen', 'Helium'],
      correctAnswer: 2
    },
    {
      id: 4,
      question: 'What type of galaxy is the Milky Way?',
      options: ['Elliptical', 'Spiral', 'Irregular', 'Lenticular'],
      correctAnswer: 1
    },
    {
      id: 5,
      question: 'Which is the hottest planet in our Solar System?',
      options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
      correctAnswer: 1
    },
    {
      id: 6,
      question: 'What is the term for a star that suddenly increases in brightness and then fades?',
      options: ['Supernova', 'Pulsar', 'Quasar', 'Black Hole'],
      correctAnswer: 0
    },
    {
      id: 7,
      question: 'What do we call the boundary around a black hole beyond which nothing can escape?',
      options: ['Event Horizon', 'Singularity', 'Schwarzschild Radius', 'Photon Sphere'],
      correctAnswer: 0
    },
    {
      id: 8,
      question: 'Which planet has the largest known volcano in the Solar System, Olympus Mons?',
      options: ['Earth', 'Mars', 'Venus', 'Saturn'],
      correctAnswer: 1
    },
    {
      id: 9,
      question: 'What is the name of the closest star system to Earth?',
      options: ['Betelgeuse', 'Sirius', 'Alpha Centauri', 'Vega'],
      correctAnswer: 2
    },
    {
      id: 10,
      question: 'What is the term for a planet outside our Solar System?',
      options: ['Dwarf Planet', 'Exoplanet', 'Rogue Planet', 'Minor Planet'],
      correctAnswer: 1
    }
  ]
};
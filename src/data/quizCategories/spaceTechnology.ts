import { QuizCategory } from '../../types/quiz';

export const spaceTechnology: QuizCategory = {
  id: 'space-technology',
  title: 'Space Technology Quiz',
  description: 'Test your knowledge of space exploration technology and history',
  difficulty: 'Expert',
  timeLimit: 1200, // 20 minutes
  pointsPerQuestion: 50,
  questions: [
    {
      id: 1,
      question: 'What was the name of the first artificial satellite launched into space?',
      options: ['Explorer 1', 'Sputnik 1', 'Voyager 1', 'Luna 2'],
      correctAnswer: 1
    },
    {
      id: 2,
      question: 'Which space agency successfully landed the Perseverance rover on Mars in 2021?',
      options: ['European Space Agency (ESA)', 'NASA', 'Roscosmos', 'ISRO'],
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'What is the main purpose of a geostationary satellite?',
      options: ['Space exploration', 'Weather forecasting', 'Telecommunications', 'Asteroid detection'],
      correctAnswer: 2
    },
    {
      id: 4,
      question: 'Which spacecraft was the first to carry humans to the Moon?',
      options: ['Apollo 11', 'Gemini 3', 'Mercury-Atlas 6', 'Space Shuttle Discovery'],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "What is the International Space Station's (ISS) primary orbit type?",
      options: ['Polar orbit', 'Geostationary orbit', 'Low Earth orbit (LEO)', 'Sun-synchronous orbit'],
      correctAnswer: 2
    },
    {
      id: 6,
      question: 'Which country launched the first reusable spacecraft, the Space Shuttle?',
      options: ['Soviet Union', 'United States', 'China', 'India'],
      correctAnswer: 1
    },
    {
      id: 7,
      question: 'What is the name of the telescope launched by NASA to replace the Hubble Space Telescope?',
      options: ['James Webb Space Telescope', 'Kepler Space Telescope', 'Spitzer Space Telescope', 'Chandra X-ray Observatory'],
      correctAnswer: 0
    },
    {
      id: 8,
      question: 'Which of the following is used to launch rockets into space?',
      options: ['Particle Accelerator', 'Launch Vehicle', 'Space Elevator', 'Orbital Reflector'],
      correctAnswer: 1
    },
    {
      id: 9,
      question: 'What type of propulsion system is most commonly used in spacecraft today?',
      options: ['Solar sail', 'Ion propulsion', 'Chemical propulsion', 'Nuclear propulsion'],
      correctAnswer: 2
    },
    {
      id: 10,
      question: 'Which private company was the first to successfully launch humans into orbit?',
      options: ['SpaceX', 'Blue Origin', 'Virgin Galactic', 'Boeing'],
      correctAnswer: 0
    }
  ]
};
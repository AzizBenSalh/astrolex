import { QuizCategory } from '../../types/quiz';

export const galaxiesUniverse: QuizCategory = {
  id: 'galaxies-universe',
  title: 'Galaxies & Universe',
  description: 'Explore the vast cosmos beyond our solar system',
  difficulty: 'Advanced',
  timeLimit: 1200, // 20 minutes
  pointsPerQuestion: 30,
  questions: [
    {
      id: 1,
      question: 'What type of galaxy is the most common in the universe?',
      options: ['Elliptical', 'Spiral', 'Irregular', 'Lenticular'],
      correctAnswer: 0
    },
    {
      id: 2,
      question: 'What is the name of our galaxy?',
      options: ['Andromeda', 'Milky Way', 'Triangulum', 'Whirlpool'],
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'What is the approximate age of the universe?',
      options: ['4.5 billion years', '10 billion years', '13.8 billion years', '20 billion years'],
      correctAnswer: 2
    },
    {
      id: 4,
      question: 'What is the term for the theory that describes the origin of the universe?',
      options: ['Big Crunch', 'Steady State', 'Big Bang', 'Cosmic Inflation'],
      correctAnswer: 2
    },
    {
      id: 5,
      question: 'What is the closest galaxy to the Milky Way?',
      options: ['Triangulum Galaxy', 'Large Magellanic Cloud', 'Andromeda Galaxy', 'Small Magellanic Cloud'],
      correctAnswer: 2
    },
    {
      id: 6,
      question: 'What is the term for the force that causes the universe to expand at an accelerating rate?',
      options: ['Dark Energy', 'Dark Matter', 'Cosmic Microwave Background', 'Gravitational Waves'],
      correctAnswer: 0
    },
    {
      id: 7,
      question: 'What is the central feature of most galaxies?',
      options: ['Black Hole', 'Star Cluster', 'Nebula', 'Quasar'],
      correctAnswer: 0
    },
    {
      id: 8,
      question: 'What are the large-scale structures in the universe that consist of clusters of galaxies?',
      options: ['Nebulae', 'Superclusters', 'Star Clouds', 'Cosmic Web'],
      correctAnswer: 1
    },
    {
      id: 9,
      question: 'What type of light allows astronomers to see the oldest parts of the universe?',
      options: ['Visible Light', 'X-rays', 'Infrared', 'Cosmic Microwave Background Radiation'],
      correctAnswer: 3
    },
    {
      id: 10,
      question: 'What is the term for a galaxy with an extremely bright center powered by a supermassive black hole?',
      options: ['Spiral Galaxy', 'Elliptical Galaxy', 'Active Galactic Nucleus (AGN)', 'Lenticular Galaxy'],
      correctAnswer: 2
    }
  ]
};
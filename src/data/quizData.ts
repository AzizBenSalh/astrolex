import { astronomyFundamentals } from './quizCategories/astronomyFundamentals';
import { solarSystem } from './quizCategories/solarSystem';
import { galaxiesUniverse } from './quizCategories/galaxiesUniverse';
import { spaceTechnology } from './quizCategories/spaceTechnology';
import { QuizCategory } from '../types/quiz';

export const quizData: Record<string, QuizCategory> = {
  'astronomy-fundamentals': astronomyFundamentals,
  'solar-system': solarSystem,
  'galaxies-universe': galaxiesUniverse,
  'space-technology': spaceTechnology
};
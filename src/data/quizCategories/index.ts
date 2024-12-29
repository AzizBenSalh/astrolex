import { QuizCategory } from '../../types/quiz';
import { astronomyFundamentals } from './astronomyFundamentals';
import { solarSystem } from './solarSystem';
import { galaxiesUniverse } from './galaxiesUniverse';
import { spaceTechnology } from './spaceTechnology';
import { physicsInSpace } from './physicsInSpace';
import { mathematicsInAstronomy } from './mathematicsInAstronomy';
import { spaceExploration } from './spaceExploration';
import { celestialMechanics } from './celestialMechanics';

export const quizCategories: QuizCategory[] = [
  astronomyFundamentals,
  solarSystem,
  galaxiesUniverse,
  spaceTechnology,
  physicsInSpace,
  mathematicsInAstronomy,
  spaceExploration,
  celestialMechanics
];
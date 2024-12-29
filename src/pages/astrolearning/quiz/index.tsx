import { useState } from 'react';
import { astronomyFundamentals } from '../../../data/quizCategories/astronomyFundamentals';
import { solarSystem } from '../../../data/quizCategories/solarSystem';
import { spaceTechnology } from '../../../data/quizCategories/spaceTechnology';
import { galaxiesUniverse } from '../../../data/quizCategories/galaxiesUniverse';
import { ActiveQuiz } from './ActiveQuiz';
import { QuizCard } from '../../../components/quiz/QuizCard';
import { useAuthStore } from '../../../store/useAuthStore';
import { QuizDifficulty } from '../../../types/quiz';

const getPointsPerDifficulty = (difficulty: QuizDifficulty): number => {
  switch (difficulty) {
    case 'Beginner': return 10;
    case 'Intermediate': return 20;
    case 'Advanced': return 40;
    case 'Expert': return 60;
    default: return 10;
  }
};

export default function Quiz() {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const [scores, setScores] = useState<Record<string, number>>({});
  const { user, updateScore } = useAuthStore();

  const handleStartQuiz = (quizId: string) => {
    setActiveQuiz(quizId);
  };

  const handleQuizComplete = (correctAnswers: number, difficulty: QuizDifficulty) => {
    const pointsPerQuestion = getPointsPerDifficulty(difficulty);
    const score = correctAnswers * pointsPerQuestion;
    
    setScores(prev => ({
      ...prev,
      [activeQuiz!]: score
    }));
    
    updateScore(score);
    setActiveQuiz(null);
  };

  const getQuizData = () => {
    switch (activeQuiz) {
      case 'astronomy-fundamentals':
        return astronomyFundamentals;
      case 'solar-system':
        return solarSystem;
      case 'space-technology':
        return spaceTechnology;
      case 'galaxies-universe':
        return galaxiesUniverse;
      default:
        return null;
    }
  };

  if (activeQuiz) {
    const quizData = getQuizData();
    if (!quizData) return null;

    return (
      <div className="min-h-screen bg-black pt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ActiveQuiz
            questions={quizData.questions}
            difficulty={quizData.difficulty}
            onComplete={handleQuizComplete}
            onExit={() => setActiveQuiz(null)}
          />
        </div>
      </div>
    );
  }

  const quizzes = [
    astronomyFundamentals,
    solarSystem,
    spaceTechnology,
    galaxiesUniverse
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Available Quizzes</h1>
          {user && (
            <div className="mb-4">
              <p className="text-xl text-purple-400">
                Welcome, {user.name}! Total Score: {user.totalScore || 0}
              </p>
            </div>
          )}
          <p className="text-gray-400 max-w-2xl mx-auto">
            Test your knowledge of astronomy and space science with our interactive quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              title={quiz.title}
              difficulty={quiz.difficulty}
              timeLimit={quiz.timeLimit}
              questionCount={quiz.questions.length}
              score={scores[quiz.id] || null}
              onStart={() => handleStartQuiz(quiz.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
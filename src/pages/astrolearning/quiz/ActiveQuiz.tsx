import { useState } from 'react';
import { QuizTimer } from '../../../components/quiz/QuizTimer';
import { QuizQuestion } from '../../../components/quiz/QuizQuestion';
import { QuizResult } from '../../../components/quiz/QuizResult';
import { Question, QuizDifficulty } from '../../../types/quiz';

interface ActiveQuizProps {
  questions: Question[];
  difficulty: QuizDifficulty;
  onComplete: (correctAnswers: number, difficulty: QuizDifficulty) => void;
  onExit: () => void;
}

export function ActiveQuiz({ questions, difficulty, onComplete, onExit }: ActiveQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerId: number) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = answerId;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const handleTimeUp = () => {
    finishQuiz();
  };

  const finishQuiz = () => {
    const correctAnswers = userAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    
    onComplete(correctAnswers, difficulty);
    setShowResults(true);
  };

  if (showResults) {
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
    
    return (
      <QuizResult
        result={{
          score: correctAnswers,
          correctAnswers,
          totalQuestions: questions.length,
          timeSpent: 0,
          difficulty,
          categoryId: ''
        }}
        questions={questions}
        userAnswers={userAnswers}
        onRetry={onExit}
      />
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div className="text-gray-400">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <QuizTimer duration={600} onTimeUp={handleTimeUp} />
      </div>

      <QuizQuestion
        question={questions[currentQuestion]}
        selectedAnswer={userAnswers[currentQuestion]}
        onAnswerSelect={handleAnswerSelect}
      />

      <div className="flex justify-between">
        <button
          onClick={onExit}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Exit Quiz
        </button>
        <button
          onClick={handleNext}
          disabled={userAnswers[currentQuestion] === null}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
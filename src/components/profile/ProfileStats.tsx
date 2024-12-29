import { Chart } from 'lucide-react';

interface ProfileStatsProps {
  totalScore: number;
  quizzesTaken: number;
  highestScore: number;
  averageScore: number;
}

export function ProfileStats({ 
  totalScore, 
  quizzesTaken, 
  highestScore,
  averageScore 
}: ProfileStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <div className="flex items-center justify-center mb-2">
          <Chart className="h-6 w-6 text-purple-400" />
        </div>
        <p className="text-3xl font-bold text-purple-400">{totalScore}</p>
        <p className="text-gray-400 text-sm">Total Score</p>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold text-purple-400">{quizzesTaken}</p>
        <p className="text-gray-400 text-sm">Quizzes Taken</p>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold text-purple-400">{highestScore}</p>
        <p className="text-gray-400 text-sm">Highest Score</p>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <p className="text-3xl font-bold text-purple-400">
          {averageScore.toFixed(1)}
        </p>
        <p className="text-gray-400 text-sm">Average Score</p>
      </div>
    </div>
  );
}
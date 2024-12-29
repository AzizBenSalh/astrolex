interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  quizzesTaken: number;
  accuracy: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-white mb-6">Top Space Explorers</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 border-b border-gray-800">
                <th className="pb-4 font-medium">Rank</th>
                <th className="pb-4 font-medium">Explorer</th>
                <th className="pb-4 font-medium text-right">Score</th>
                <th className="pb-4 font-medium text-right">Quizzes</th>
                <th className="pb-4 font-medium text-right">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.username} className="border-b border-gray-800">
                  <td className="py-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${
                      entry.rank === 1 ? 'bg-yellow-500' :
                      entry.rank === 2 ? 'bg-gray-400' :
                      entry.rank === 3 ? 'bg-orange-600' :
                      'bg-gray-800'
                    } text-white font-bold`}>
                      {entry.rank}
                    </span>
                  </td>
                  <td className="py-4 text-white">{entry.username}</td>
                  <td className="py-4 text-right text-purple-400">{entry.score}</td>
                  <td className="py-4 text-right text-gray-400">{entry.quizzesTaken}</td>
                  <td className="py-4 text-right text-gray-400">{entry.accuracy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface QuizStats {
  totalQuizzesTaken: number;
  topicsAttempted: Record<string, number>;
  highestScore: number;
  averageScore: number;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  totalScore?: number;
  favoriteTopic?: string;
  quizStats?: QuizStats;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  updateScore: (newScore: number, topic: string) => void;
  setFavoriteTopic: (topic: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
      updateProfile: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
      updateScore: (newScore, topic) =>
        set((state) => {
          if (!state.user) return state;

          const currentStats = state.user.quizStats || {
            totalQuizzesTaken: 0,
            topicsAttempted: {},
            highestScore: 0,
            averageScore: 0
          };

          const totalScore = (state.user.totalScore || 0) + newScore;
          const totalQuizzesTaken = currentStats.totalQuizzesTaken + 1;
          const topicsAttempted = {
            ...currentStats.topicsAttempted,
            [topic]: (currentStats.topicsAttempted[topic] || 0) + 1
          };
          const highestScore = Math.max(currentStats.highestScore, newScore);
          const averageScore = totalScore / totalQuizzesTaken;

          return {
            user: {
              ...state.user,
              totalScore,
              quizStats: {
                totalQuizzesTaken,
                topicsAttempted,
                highestScore,
                averageScore
              }
            }
          };
        }),
      setFavoriteTopic: (topic) =>
        set((state) => ({
          user: state.user ? { ...state.user, favoriteTopic: topic } : null
        }))
    }),
    {
      name: 'auth-storage',
    }
  )
);
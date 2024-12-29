import { LucideIcon } from 'lucide-react';

// Remove duplicate QuizResult type since it's now in types/quiz.ts
export interface NavLink {
  href: string;
  label: string;
  active?: boolean;
  dropdownItems?: Array<{
    label: string;
    href: string;
    description?: string;
  }>;
}

export interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}
import type { ReactNode } from 'react';

export default interface StatCardProps {
  variant?: 'accent' | 'greyscale' | 'white';
  title?: string;
  customTitleComponent?: ReactNode;
  value?: string;
  customValueComponent?: ReactNode;
  percentage?: number;
  subtitle?: string;
  className?: string;
}

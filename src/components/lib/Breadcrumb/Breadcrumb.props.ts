import type { ReactNode } from 'react';

export default interface BreadcrumbProps {
  customIcon?: ReactNode;
  open?: boolean;
  title: string;
}

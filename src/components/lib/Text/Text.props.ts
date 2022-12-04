import type { HTMLProps } from 'react';

interface TextProps extends HTMLProps<HTMLParagraphElement> {
  variant?: 'body1' | 'body2' | 'subheading' | 'caption';
  className?: string;
}

export default TextProps;

import './Text.scss';

import type { FC, PropsWithChildren } from 'react';

import match from '../../../utils/match';
import type TextProps from './Text.props';

const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  variant = 'body1',
  className,
  ...rest
}) => {
  const textClassName = match(variant, {
    body1: 'body1',
    body2: 'body2',
    subheading: 'subheading',
    caption: 'caption',
    default: '',
  });

  return (
    <p
      className={`${textClassName} ${className || ''} leading-relaxed`}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;

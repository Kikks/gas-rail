import './Button.scss';

import type { FC } from 'react';

import match from '../../../utils/match';
import Loader from '../Loader';
import type ButtonProps from './Button.props';

const Button: FC<ButtonProps> = ({
  variant = 'solid',
  size = 'small',
  children,
  disabled,
  className,
  loading,
  ...rest
}) => {
  const buttonSize = match(size, {
    small: 'button__size__small',
    medium: 'button__size__medium',
    large: 'button__size__large',
    default: '',
  });

  const buttonVariant = match(variant, {
    solid: 'button__variant__solid',
    outline: 'button__variant__outline',
    border: 'button__variant__border',
    white: 'button__variant__white',
    black: 'button__variant__black',
    default: '',
  });

  return (
    <button
      disabled={loading || disabled}
      className={`${'button__base'} ${buttonSize} ${buttonVariant} ${
        loading ? 'cursor-wait' : ''
      } ${className || ''}`}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;

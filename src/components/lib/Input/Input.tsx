import type { FC } from 'react';

import match from '../../../utils/match';
import Text from '../Text';
import type InputProps from './Input.props';

const Input: FC<InputProps> = ({
  label,
  id,
  error,
  helperText,
  startIcon,
  endIcon,
  required,
  containerClassName,
  className,
  variant = 'contained',
  ...rest
}) => {
  const inputVariantStyles = match(variant, {
    outline: 'font-bold placeholder:text-black/50 disabled:text-black/30',
    contained: 'placeholder:text-gray-400 bg-[#fefefe]',
    default: '',
  });

  const inputContainerVariantStyles = match(variant, {
    outline:
      'rounded-none bg-[rgba(0,0,0,0)] border border-[#caa593] max-w-none',
    contained: 'max-w-[700px] items-center rounded-2xl border',
    default: '',
  });

  return (
    <div className="w-full">
      {label && (
        <label className="ml-1 text-sm font-medium" htmlFor={id}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className={`w-full ${label ? 'mt-2' : ''}`}>
        <div
          className={`mx-auto flex w-full items-center overflow-hidden focus-within:border-primary-main ${inputContainerVariantStyles} ${
            startIcon ? 'pl-4' : ''
          } ${endIcon ? 'pr-4' : ''} ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${containerClassName || ''}`}
        >
          {startIcon && startIcon}

          <input
            id={id}
            className={`flex-1 border-none bg-transparent py-3 px-5 text-sm outline-none focus:border-none disabled:cursor-not-allowed ${inputVariantStyles} ${
              startIcon ? 'ml-2 pl-0' : ''
            } ${endIcon ? 'mr-2 pr-0' : ''} ${className || ''}`}
            {...rest}
          />

          {endIcon && endIcon}
        </div>
      </div>

      {helperText && (
        <Text variant="caption" className={error ? 'text-red-500' : ''}>
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default Input;

import type { FC } from 'react';

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
  ...rest
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="ml-1 text-sm font-medium" htmlFor={id}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className={`w-full ${label ? 'mt-2' : ''}`}>
        <div
          className={`mx-auto flex w-full max-w-[700px] items-center overflow-hidden rounded-2xl border ${
            startIcon ? 'pl-4' : ''
          } ${
            endIcon ? 'pr-4' : ''
          } bg-[#fefefe] focus-within:border-primary-main ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${containerClassName || 'containerClassName'}`}
        >
          {startIcon && startIcon}

          <input
            id={id}
            className={`flex-1 border-none bg-transparent py-3 px-5 text-sm outline-none placeholder:text-gray-400 focus:border-none ${
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

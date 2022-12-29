import type { FC } from 'react';

import match from '../../../utils/match';
import Text from '../Text';
import type SelectProps from './Select.props';

const Select: FC<SelectProps> = ({
  label,
  id,
  error,
  helperText,
  options,
  containerClassName,
  className,
  variant = 'contained',
  ...rest
}) => {
  const inputVariantStyles = match(variant, {
    outline: 'font-bold placeholder:text-black/50 disabled:text-black/30',
    contained: 'placeholder:text-gray-400',
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
        <label className="text-sm font-bold" htmlFor={id}>
          {label}
        </label>
      )}

      <div className="w-full">
        <div
          className={`mx-auto flex w-full max-w-[700px] items-center overflow-hidden focus-within:border-primary-main ${inputContainerVariantStyles} ${
            error ? 'border-red-500' : 'border-gray-300'
          } ${containerClassName || ''}`}
        >
          <select
            id={id}
            className={`flex-1 border-none bg-transparent py-3 px-5 text-sm outline-none focus:border-none disabled:cursor-not-allowed ${inputVariantStyles} ${
              className || ''
            }`}
            {...rest}
          >
            {options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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

export default Select;

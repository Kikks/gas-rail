import type { FC } from 'react';

import type SelectProps from './Select.props';

const TransparentSelect: FC<SelectProps> = ({ id, options, ...rest }) => {
  return (
    <div className="w-full">
      <select
        id={id}
        className="w-full border-none bg-transparent text-sm font-medium outline-none focus:border-none"
        {...rest}
      >
        {options?.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TransparentSelect;

import type { FC } from 'react';

import type CheckboxProps from './Checkbox.props';

const Checkbox: FC<CheckboxProps> = ({ label, id, ...rest }) => {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-primary-main focus:ring-2 focus:ring-primary-main"
        {...rest}
      />
      {label && (
        <label
          htmlFor={id}
          className="ml-2 text-sm font-medium text-rails-dark-gray"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;

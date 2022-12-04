import { Icon } from '@iconify/react';
import type { FC } from 'react';

import type { IconButtonProps } from './Button.props';

const IconButton: FC<IconButtonProps> = ({
  icon,
  className,
  buttonClassName,
  ...rest
}) => {
  return (
    <button
      className={`flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-500/30 ${buttonClassName}`}
      {...rest}
      type="button"
    >
      <Icon icon={icon} className={`text-2xl ${className || ''}`} />
    </button>
  );
};

export default IconButton;

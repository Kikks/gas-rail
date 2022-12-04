import type { FC, PropsWithChildren } from 'react';

import type ChipProps from './Chip.props';

const Chip: FC<PropsWithChildren<ChipProps>> = ({ children, className }) => {
  return (
    <div
      className={`rounded-full bg-primary-main px-2 py-1 text-xxs text-white ${
        className || ''
      }`}
    >
      {children}
    </div>
  );
};

export default Chip;

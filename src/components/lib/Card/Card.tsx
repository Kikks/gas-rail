import type { FC } from 'react';

import { IconButton } from '../Button';
import Text from '../Text';
import type CardProps from './Card.props';

const Card: FC<CardProps> = ({
  title,
  titleComponent,
  showMenu,
  className,
  children,
}) => {
  return (
    <div
      className={`flex w-full flex-col gap-3 rounded-2xl bg-white p-5 ${
        className || ''
      }`}
    >
      <div className="flex w-full items-center gap-3">
        {title && (
          <Text variant="caption" className="font-semibold">
            {title}
          </Text>
        )}

        {titleComponent && titleComponent}

        {showMenu && (
          <IconButton
            icon="carbon:overflow-menu-horizontal"
            buttonClassName="ml-auto"
          />
        )}
      </div>

      {children}
    </div>
  );
};

export default Card;

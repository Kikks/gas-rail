import { Icon } from '@iconify/react';
import type { FC } from 'react';

import Text from '../Text';
import type BreadcrumbProps from './Breadcrumb.props';

const Breadcrumb: FC<BreadcrumbProps> = ({
  title,
  open = false,
  customIcon,
}) => {
  return (
    <div className="flex items-center gap-1">
      <Icon
        icon={open ? 'gg:chevron-down' : 'gg:chevron-right'}
        className="text-lg"
      />

      {customIcon || <Icon icon="ph:folder-notch" className="text-xl" />}

      <Text variant="caption">{title}</Text>
    </div>
  );
};

export default Breadcrumb;

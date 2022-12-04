import type { FC, PropsWithChildren } from 'react';

import styles from './Table.module.scss';
import type { TableRowProps } from './TableProps';

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({
  children,
  onClick,
}) => {
  return (
    <tr
      className={`${styles.table__row} group ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </tr>
  );
};

export default TableRow;

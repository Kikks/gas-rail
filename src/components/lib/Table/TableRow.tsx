import './Tables.css';

import type { FC, PropsWithChildren } from 'react';

import type { TableRowProps } from './TableProps';

const TableRow: FC<PropsWithChildren<TableRowProps>> = ({
  children,
  onClick,
}) => {
  return (
    <tr
      className={`table__row group ${onClick ? 'cursor-pointer' : ''}`}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {children}
    </tr>
  );
};

export default TableRow;

import './Tables.css';

import type { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import type { TableCellProps } from './TableProps';

const TableCell: FC<PropsWithChildren<TableCellProps>> = ({
  children,
  url,
  onClick,
}) => {
  return (
    <td onClick={onClick} className="table__cell">
      {url ? (
        <Link to={url} className="w-full">
          <span>{children}</span>
        </Link>
      ) : (
        children
      )}
    </td>
  );
};

export default TableCell;

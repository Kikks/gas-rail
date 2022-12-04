import type { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import styles from './Table.module.scss';
import type { TableCellProps } from './TableProps';

const TableCell: FC<PropsWithChildren<TableCellProps>> = ({
  children,
  url,
  onClick,
}) => {
  return (
    <td onClick={onClick} className={styles.table__cell}>
      {url ? (
        <Link to={url} className="w-full">
          <a>{children}</a>
        </Link>
      ) : (
        children
      )}
    </td>
  );
};

export default TableCell;

import type { FC } from 'react';

import styles from './Table.module.scss';

const Table: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default Table;

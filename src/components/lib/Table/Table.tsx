import './Tables.css';

import type { FC } from 'react';

const Table: FC = ({ children }) => {
  return (
    <div className="table_container">
      <table className="table">{children}</table>
    </div>
  );
};

export default Table;

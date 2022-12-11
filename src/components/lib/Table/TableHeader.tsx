import './Tables.scss';

import type { FC } from 'react';

import Checkbox from '../Checkbox';
import Text from '../Text';
import type { TableHeadProps } from './TableProps';

const TableHeader: FC<TableHeadProps> = ({ items, showCheckbox }) => {
  return (
    <thead>
      <tr className="table__header_row">
        {showCheckbox && (
          <th className="table__header_cell">
            <Checkbox />
          </th>
        )}
        {items.map((item, index) => (
          <th className="table__header_cell" key={index}>
            <Text variant="caption" className="font-normal text-black/40">
              {item}
            </Text>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

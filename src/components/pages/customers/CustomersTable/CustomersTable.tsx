import { Icon } from '@iconify/react';

import Avatar from '../../../lib/Avatar';
import Checkbox from '../../../lib/Checkbox';
import Chip from '../../../lib/Chip';
import Pagination from '../../../lib/Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../lib/Table';
import Text from '../../../lib/Text';
import { data } from './data';

const CustomersTable = () => {
  return (
    <div className="w-full overflow-hidden">
      <Table>
        <TableHeader
          showCheckbox
          items={[
            'User',
            'Estimated Tank Storage',
            'Address',
            'Last Order',
            'Gas Level',
          ]}
        />
        <TableBody>
          {data.map((order, index) => (
            <TableRow key={index}>
              <TableCell url={`/customers/1`}>
                <div className="hidden items-center justify-center gap-3 group-hover:flex">
                  <Checkbox />
                </div>
              </TableCell>
              <TableCell url={`/customers/1`}>
                <div className="flex items-center gap-3">
                  <Avatar
                    className="h-9 w-9"
                    image={order.image}
                    name={order.name}
                  />
                  <Text variant="caption">{order.name}</Text>

                  {order.retailer && <Chip>Retail Agent</Chip>}
                </div>
              </TableCell>

              <TableCell url={`/customers/1`}>
                <Text variant="caption">{order.estimated_tank_storage}</Text>
              </TableCell>

              <TableCell url={`/customers/1`}>
                <Text variant="caption">{order.address}</Text>
              </TableCell>

              <TableCell url={`/customers/1`}>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="mdi:calendar-blank-outline"
                    className="text-lg text-black/40"
                  />
                  <Text variant="caption">{order.last_order}</Text>
                </div>
              </TableCell>

              <TableCell url={`/customers/1`}>
                <div className="flex items-center gap-2">
                  <figure className="h-6 w-6">
                    <img
                      src={`/assets/icons/${order.gas_level.level}.svg`}
                      alt={order.gas_level.level}
                      className="h-full w-full object-contain"
                    />
                  </figure>

                  <div className="flex">
                    <Text variant="caption" className="capitalize">
                      {order.gas_level.level}, {order.gas_level.amount}
                    </Text>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination count={5} page={1} setPage={() => {}} />
    </div>
  );
};

export default CustomersTable;

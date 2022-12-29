import { Icon } from '@iconify/react';
import moment from 'moment';
import type { FC } from 'react';

import Avatar from '../../../lib/Avatar';
import Checkbox from '../../../lib/Checkbox';
// import Chip from '../../../lib/Chip';
import Pagination from '../../../lib/Pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../../../lib/Table';
import Text from '../../../lib/Text';
import type CustomerTableProps from './CustomerTable.props';

const CustomersTable: FC<CustomerTableProps> = ({ data }) => {
  return (
    <div className="w-full overflow-hidden">
      <Table>
        <TableHeader
          showCheckbox
          items={[
            'User',
            'Estimated Tank Storage (kg)',
            'Address',
            'Created At',
            'Gas Level',
          ]}
        />
        <TableBody>
          {data.map((device, index) => (
            <TableRow key={index}>
              <TableCell url={`/customers/${device.id}`}>
                <div className="hidden items-center justify-center gap-3 group-hover:flex">
                  <Checkbox />
                </div>
              </TableCell>
              <TableCell url={`/customers/${device.id}`}>
                <div className="flex items-center gap-3">
                  <Avatar
                    className="h-9 w-9"
                    name={`${device.first_name} ${device.last_name}`}
                  />
                  <Text variant="caption">{`${device.first_name} ${device.last_name}`}</Text>

                  {/* {device.retailer && <Chip>Retail Agent</Chip>} */}
                </div>
              </TableCell>

              <TableCell url={`/customers/${device.id}`}>
                <Text variant="caption">
                  {device?.tank_storage?.value || 0}
                </Text>
              </TableCell>

              <TableCell url={`/customers/${device.id}`}>
                <Text variant="caption">{device.address}</Text>
              </TableCell>

              <TableCell url={`/customers/${device.id}`}>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="mdi:calendar-blank-outline"
                    className="text-lg text-black/40"
                  />
                  <Text variant="caption">
                    {moment(device.created_on).format('DD, MMM YYYY')}
                  </Text>
                </div>
              </TableCell>

              <TableCell url={`/customers/${device.id}`}>
                <div className="flex items-center gap-2">
                  <figure className="h-6 w-6">
                    <img
                      src={`/assets/icons/full.svg`}
                      alt=""
                      className="h-full w-full object-contain"
                    />
                  </figure>

                  <div className="flex">
                    <Text variant="caption" className="capitalize">
                      Full, {device.tank_storage?.value || 0}/
                      {device.tank_storage?.value || 0}kg
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

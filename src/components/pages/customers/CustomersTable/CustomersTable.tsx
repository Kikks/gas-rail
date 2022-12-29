import { Icon } from '@iconify/react';
import moment from 'moment';
import type { FC } from 'react';

import { convertKgToLitre, convertM3ToKg } from '../../../../utils/misc';
import Avatar from '../../../lib/Avatar';
import Checkbox from '../../../lib/Checkbox';
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
  const getLevel = (flowRate: number = 0, tankStorage: number = 0) => {
    const remainingGas = tankStorage - Number(convertM3ToKg(flowRate));

    if (remainingGas > 0.75 * tankStorage) {
      return {
        level: 'full',
        remainingGas,
      };
    }

    if (remainingGas > 0.25 * tankStorage) {
      return {
        level: 'mid',
        remainingGas,
      };
    }

    return {
      level: 'low',
      remainingGas,
    };
  };

  return (
    <div className="w-full overflow-hidden">
      <Table>
        <TableHeader
          showCheckbox
          items={[
            'User',
            'Estimated Tank Storage',
            'Address',
            'Created At',
            'Gas Level',
          ]}
        />
        <TableBody>
          {data.map((device, index) => {
            const { level, remainingGas } = getLevel(
              device?.accumulated_flow_rate,
              device?.tank_storage?.value
            );

            return (
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
                    {device?.tank_storage?.value || 0}kg /{' '}
                    {device?.tank_storage?.value
                      ? convertKgToLitre(device?.tank_storage.value)
                      : 0}
                    L
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
                        src={`/assets/icons/${level}.svg`}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </figure>

                    <div className="flex">
                      <Text variant="caption" className="capitalize">
                        {level}, {remainingGas}/
                        {device.tank_storage?.value || 0}kg
                      </Text>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Pagination count={5} page={1} setPage={() => {}} />
    </div>
  );
};

export default CustomersTable;

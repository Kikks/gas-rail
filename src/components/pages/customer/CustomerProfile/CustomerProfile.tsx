import type { FC } from 'react';

import Text from '../../../lib/Text';
import type { DetailsProps } from './CustomerProfile.props';

const Detail: FC<DetailsProps> = ({ title, value }) => (
  <div className="w-full">
    <Text variant="caption" className="text-black/50">
      {title}
    </Text>
    <Text>{value}</Text>
  </div>
);

const CustomerProfile = () => {
  return (
    <div className="grid w-full grid-cols-2 gap-7">
      <figure className="col-span-1 aspect-square w-full overflow-hidden rounded-2xl shadow-md">
        <img
          src="/assets/images/customer.png"
          alt="Customer"
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="col-span-1">
        <Detail title="Name" value="Oladapo Benjamin" />
        <Detail title="Gender" value="Male" />
        <Detail title="Address" value="5, Abifarin Street, Ogudu GRA" />
        <Detail title="Phone Number" value="Oladapo Benjamin" />
      </div>
    </div>
  );
};

export default CustomerProfile;

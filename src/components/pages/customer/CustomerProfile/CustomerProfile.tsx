import type { FC } from 'react';

import Button from '../../../lib/Button';
import Heading from '../../../lib/Heading';
import Text from '../../../lib/Text';
import type { DetailsProps } from './CustomerProfile.props';
import type CustomerProfileProps from './CustomerProfile.props';

const Detail: FC<DetailsProps> = ({ title, value }) => (
  <div className="w-full">
    <Text variant="caption" className="text-black/50">
      {title}
    </Text>
    <Text>{value}</Text>
  </div>
);

const CustomerProfile: FC<CustomerProfileProps> = ({
  device,
  toggleShowModal,
}) => {
  return (
    <div className="grid w-full grid-cols-1 gap-7">
      {/* <figure className="col-span-1 aspect-square w-full overflow-hidden rounded-2xl shadow-md">
        <img
          src="/assets/images/customer.png"
          alt="Customer"
          className="h-full w-full object-cover"
        />
      </figure> */}

      <div className="col-span-1">
        <div className="flex w-full flex-wrap items-center justify-between gap-5">
          <Heading variant="h3">Device Information</Heading>

          <Button
            onClick={toggleShowModal}
            className="min-w-0 px-6 py-2 text-sm"
          >
            Edit
          </Button>
        </div>

        <Detail
          title="Name"
          value={`${device?.first_name || ''} ${device?.last_name || ''}`}
        />
        {/* <Detail title="Gender" value={`${device?.gender}`} /> */}
        <Detail title="Address" value={device?.address || ''} />
        <Detail title="Phone Number" value={device?.phone_number || ''} />
      </div>
    </div>
  );
};

export default CustomerProfile;

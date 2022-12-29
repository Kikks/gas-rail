import moment from 'moment';
import type { FC } from 'react';

import Avatar from '../../../lib/Avatar';
import Text from '../../../lib/Text';
import type ActivitiesProps from './Activities.props';

const Activities: FC<ActivitiesProps> = ({ deviceStreams }) => {
  return (
    <div className="grid w-full gap-3">
      <Text variant="caption" className="font-semibold">
        Activities
      </Text>

      <div className="grid w-full gap-2">
        {deviceStreams.map((stream, index) => (
          <div className="flex gap-3" key={index}>
            <div className="flex flex-col items-center">
              <Avatar className="h-9 w-9" name="&nbsp;" />
              <div className="w-0.5 flex-1 bg-black/10" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <Text variant="caption">
                Accumulated Flow Rate:{' '}
                <span className="font-bold">
                  {Number(stream.accumulated_flow_rate).toFixed(4)}
                </span>
              </Text>
              <Text variant="caption">
                Instant Flow Rate:{' '}
                <span className="font-bold">
                  {Number(stream.instant_flow_rate).toFixed(4)}
                </span>
              </Text>
              <Text variant="caption" className="text-black/40">
                {moment(stream.created_on).fromNow()}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;

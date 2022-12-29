import moment from 'moment';
import type { FC } from 'react';

import { convertM3ToKg, convertM3ToLitre } from '../../../../utils/misc';
import Avatar from '../../../lib/Avatar';
import Text from '../../../lib/Text';
import type ActivitiesProps from './Activities.props';

const Activities: FC<ActivitiesProps> = ({ deviceStreams }) => {
  return (
    <div className="grid w-full gap-3">
      <Text variant="caption" className="font-semibold">
        Activities
      </Text>

      <div className="grid w-full gap-5">
        {deviceStreams.map((stream, index) => (
          <div className="flex gap-3" key={index}>
            <div className="flex flex-col items-center">
              <Avatar className="h-9 w-9" name="&nbsp;" />
              <div className="w-0.5 flex-1 bg-black/10" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-0">
              <Text variant="caption">
                Volume of Gas Used:{' '}
                <span className="font-bold">
                  {convertM3ToKg(Number(stream.accumulated_flow_rate))}kg /
                  {convertM3ToLitre(Number(stream.accumulated_flow_rate))}L
                </span>
              </Text>
              <Text variant="caption">
                Flow Rate:{' '}
                <span className="font-bold">{stream.instant_flow_rate}</span>
              </Text>
              <Text variant="caption" className="text-black/40">
                {moment(stream.created_on).format('DD/MM/YYYY, hh:mm:ss')}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;

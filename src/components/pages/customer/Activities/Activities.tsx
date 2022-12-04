import Avatar from '../../../lib/Avatar';
import Text from '../../../lib/Text';
import { activities } from './data';

const Activities = () => {
  return (
    <div className="grid w-full gap-3">
      <Text variant="caption" className="font-semibold">
        Activities
      </Text>

      <div className="grid w-full gap-2">
        {activities.map((activity, index) => (
          <div className="flex gap-3" key={index}>
            <div className="flex flex-col items-center gap-1">
              <Avatar className="h-9 w-9" image={activity.image} />
              <div className="w-0.5 flex-1 bg-black/10" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <Text>{activity.title}</Text>
              <Text variant="caption" className="text-black/40">
                {activity.time}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;

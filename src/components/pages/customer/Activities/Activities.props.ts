import type IDeviceStream from '../../../../types/DeviceStream.type';

export interface ActivitiyProps {
  image: string;
  title: string;
  time: string;
}

export default interface ActivitiesProps {
  deviceStreams: IDeviceStream[];
}

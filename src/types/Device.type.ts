import type IDeviceStream from './DeviceStream.type';
import type ITankStorage from './TankStorage.type';

type IDevice = {
  id: string;
  status: string;
  created_by: string;
  created_on: string;
  modified_by: string;
  modified_on: string;
  uuid: string;
  first_name: string;
  last_name: string;
  address: string;
  email: string;
  phone_number: string;
  threshold?: string;
  tank_storage?: ITankStorage;
  total_streams?: number;
  total_accumulated_flow_rate?: number;
  estimated_total_orders?: number;
  accumulated_flow_rate?: number;
  streams?: IDeviceStream;
};

export default IDevice;

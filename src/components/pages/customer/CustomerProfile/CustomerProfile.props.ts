import type IDevice from '../../../../types/Device.type';

export interface DetailsProps {
  title: string;
  value: string;
}

export default interface CustomerProfileProps {
  device?: IDevice | null;
  toggleShowModal?: () => void;
}

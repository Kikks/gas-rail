import type IDevice from '../../../../types/Device.type';

export default interface UpdateDeviceModalProps {
  device?: IDevice | null;
  isOpen: boolean;
  toggleOpen: () => void;
}

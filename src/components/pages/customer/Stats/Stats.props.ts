import type IDevice from '../../../../types/Device.type';

export default interface StatsProps {
  device: IDevice | null;
  loading?: boolean;
}

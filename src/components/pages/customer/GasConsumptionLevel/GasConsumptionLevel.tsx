import type { FC } from 'react';
import { useMemo } from 'react';

import { convertM3ToKg } from '../../../../utils/misc';
import Card from '../../../lib/Card';
import Text from '../../../lib/Text';
import type GasConsumptionLevelProps from './GasConsumptionLevel.props';

const GasConsumptionLevel: FC<GasConsumptionLevelProps> = ({ device }) => {
  const guageIndicatorPosition = useMemo(() => {
    return {
      top: `${
        // Please remove this mess of a ternary check once Akin has fixed the
        // total_accumulated_flow_rate issue
        // eslint-disable-next-line no-nested-ternary
        device?.threshold &&
        device?.tank_storage &&
        device.accumulated_flow_rate
          ? device.accumulated_flow_rate < device.tank_storage.value
            ? `${
                (Number(convertM3ToKg(Number(device.accumulated_flow_rate))) /
                  Number(device.tank_storage.value)) *
                100
              }%`
            : '100%'
          : '0%'
      }`,
    };
  }, [device?.threshold, device?.tank_storage, device?.accumulated_flow_rate]);

  return (
    <Card title="Gas Consumption Levels">
      <div className="flex h-full w-full justify-center gap-16 self-stretch pl-5 pr-44 2xl:gap-20">
        <figure className="relative aspect-[5/10] h-[100%]">
          <img
            src="/assets/icons/big-gas.svg"
            alt="Gas"
            className="h-full w-full object-contain"
          />

          <div className="absolute top-[65%] left-[47%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center text-center">
            <Text variant="caption">Capacity:</Text>
            <Text className="font-semibold">
              {device?.tank_storage?.name || '0'}
            </Text>
          </div>
        </figure>

        <div className="grid justify-start self-stretch">
          {device?.tank_storage && (
            <>
              <figure className="relative col-span-1 aspect-[1/4] h-[100%]">
                <img
                  src="/assets/icons/guage.svg"
                  alt="Gas"
                  className="h-full w-full object-contain"
                />

                <div
                  className={`absolute left-[-60%] translate-y-[-50%] rounded-full py-1 px-3 ${
                    (device?.tank_storage.value || 0) -
                      Number(convertM3ToKg(device.accumulated_flow_rate)) <
                    (device?.threshold || 0)
                      ? 'bg-[#e55252]'
                      : 'bg-[#8ABC82]'
                  }`}
                  style={guageIndicatorPosition}
                >
                  <Text className="text-xs font-bold text-white">
                    {(device?.tank_storage.value || 0) -
                      Number(convertM3ToKg(device.accumulated_flow_rate))}
                    kg
                  </Text>
                </div>

                <img
                  src="/assets/icons/guage-level.svg"
                  alt="Gas"
                  className="absolute left-[50%] h-10 w-10 origin-center translate-y-[-50%] translate-x-[-50%] object-contain"
                  style={guageIndicatorPosition}
                />

                <div
                  className={`absolute flex translate-y-[50%] items-center gap-2`}
                  style={{
                    bottom: `${
                      device?.threshold && device?.tank_storage
                        ? `${
                            (Number(device.threshold) /
                              Number(device.tank_storage.value)) *
                            100
                          }%`
                        : '0%'
                    }`,
                    left: '50%',
                  }}
                >
                  <img
                    src="/assets/icons/level-indicator.svg"
                    alt=""
                    className=""
                  />

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Text variant="caption">{device?.threshold}</Text>
                      <Text
                        variant="caption"
                        className="font-semibold text-black/50"
                      >
                        kg
                      </Text>
                    </div>

                    <Text
                      variant="caption"
                      className="whitespace-nowrap text-xxs text-[#999999]"
                    >
                      trigger volume <br /> level
                    </Text>
                  </div>
                </div>
              </figure>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default GasConsumptionLevel;

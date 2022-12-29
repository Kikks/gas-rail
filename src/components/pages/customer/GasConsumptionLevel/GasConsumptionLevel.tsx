import type { FC } from 'react';

import Card from '../../../lib/Card';
import Text from '../../../lib/Text';
import type GasConsumptionLevelProps from './GasConsumptionLevel.props';

const GasConsumptionLevel: FC<GasConsumptionLevelProps> = ({ device }) => {
  return (
    <Card title="Gas Consumption Levels">
      <div className="grid grid-cols-2 items-center justify-items-center">
        <figure className="relative col-span-1 aspect-square">
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

        <div className="col-span-1 grid w-full grid-cols-2 gap-2 self-stretch">
          {device?.tank_storage && (
            <>
              <figure className="relative col-span-1 aspect-[5/13] w-full">
                <img
                  src="/assets/icons/guage.svg"
                  alt="Gas"
                  className="h-full w-full object-contain"
                />

                <div
                  className={`absolute flex translate-y-[50%] items-center gap-5`}
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
                      <Text>{device?.threshold}</Text>
                      <Text className="font-semibold text-black/50">kg</Text>
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

              <div className="flex flex-col items-start justify-between">
                <div className="mt-16 rounded-full bg-[#8ABC82] py-1 px-3">
                  <Text className="font-bold text-white">+26.37</Text>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default GasConsumptionLevel;

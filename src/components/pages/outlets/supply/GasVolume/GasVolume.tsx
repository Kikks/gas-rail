import type { PieConfig } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';
import { Icon } from '@iconify/react';

import Button from '../../../../lib/Button';
import Heading from '../../../../lib/Heading';
import Text from '../../../../lib/Text';
import { data } from './data';

const GasVolume = () => {
  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'title',
    radius: 1,
    innerRadius: 0.85,
    label: false,
    legend: false,
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        content: '',
      },
    },
    color: ['#2CC76C', '#eae0dc'],
  };

  return (
    <div className="col-span-1 grid gap-1 border border-black/10 p-5">
      <div className="flex items-center gap-1">
        <div className="h-2 w-2 rounded-full bg-[#2CC76C]" />
        <Text variant="caption">Gas Volume</Text>
      </div>

      <div className="grid grid-cols-5 content-start items-start gap-5">
        <div className="relative col-span-3 grid aspect-square w-full content-start">
          <Pie {...config} />

          <div className="absolute top-[50%] left-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center gap-2 text-center">
            <Text className="text-[#637381]">Total volume left</Text>
            <Heading variant="h2">23,994kg</Heading>
          </div>
        </div>

        <div className="col-span-2 grid content-start gap-5">
          <div className="flex items-center gap-3">
            <figure className="grid h-10 w-10 place-items-center">
              <img
                src="/assets/icons/gas.svg"
                alt="Gas"
                className="h-full w-full object-contain"
              />
            </figure>

            <div className="">
              <Text variant="caption">Tank Capacity:</Text>
              <Text variant="caption" className="font-semibold">
                30, 000 kg
              </Text>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <figure className="grid h-8 w-8 place-items-center">
              <img
                src="/assets/icons/thermometer.svg"
                alt="Thermometer"
                className="h-full w-full object-contain"
              />
            </figure>

            <div className="">
              <Text variant="caption">Tank Temparature:</Text>
              <Text variant="caption" className="font-semibold text-[#30746d]">
                22° (celsius)
              </Text>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <figure className="grid h-10 w-10 place-items-center">
              <img
                src="/assets/icons/truck.svg"
                alt="Truck"
                className="h-full w-full object-contain"
              />
            </figure>

            <div className="">
              <Text variant="caption">Volume supplied:</Text>
              <Text variant="caption" className="font-semibold">
                29, 000 kg
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Text className="text-[#999999]">Set trigger volume level</Text>

        <div className="flex items-center gap-5">
          <Button
            variant="white"
            className="min-w-0 rounded-lg py-3 px-6 shadow-md"
          >
            2,425 kg
          </Button>
          <Button className="flex min-w-0 items-center justify-center gap-2 rounded-lg py-3 px-6 shadow-md">
            Enter
            <Icon
              icon="material-symbols:arrow-forward-rounded"
              className="text-xl"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GasVolume;

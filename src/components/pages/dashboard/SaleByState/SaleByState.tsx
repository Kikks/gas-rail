import type { PieConfig } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';

import Card from '../../../lib/Card';
import Text from '../../../lib/Text';
import { data } from './data';

const colors = ['#F86822', '#79797C', '#BBBABA', '#FFB693'];

const SaleByState = () => {
  const config: PieConfig = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'state',
    radius: 1,
    innerRadius: 0.6,
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
    color: colors,
  };

  return (
    <Card title="Sales by State" className="col-span-2 self-stretch">
      <div className="grid w-full flex-1 grid-cols-2 items-center gap-5">
        <div className="col-span-1">
          <Pie {...config} />
        </div>

        <div className="col-span-1 flex flex-col gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-5"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                />
                <Text variant="caption">{item.state}</Text>
              </div>

              <Text variant="caption">{item.value}%</Text>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SaleByState;

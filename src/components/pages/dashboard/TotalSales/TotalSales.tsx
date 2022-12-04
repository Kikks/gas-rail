import type { LineConfig } from '@ant-design/plots';
import { Line } from '@ant-design/plots';

import { nFormatter } from '../../../../utils/misc';
import Card from '../../../lib/Card';
import Text from '../../../lib/Text';
import { data } from './data';

const TotalSales = () => {
  const config: LineConfig = {
    data,
    xField: 'weight',
    yField: 'value',
    smooth: true,
    seriesField: 'category',
    legend: false,
    yAxis: {
      label: {
        formatter: (v) => nFormatter(Number(v), 0),
      },
    },
    color: ['#1c1c1c', '#F86822'],
  };

  return (
    <Card
      title="Total Sales vs Volume"
      showMenu
      className="col-span-3"
      titleComponent={
        <div className="flex items-center divide-x">
          <Text variant="caption" className="mr-2 text-black/40">
            Operating Status
          </Text>

          <div className="flex items-center gap-3 pl-2">
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#1C1C1C]" />
              <Text variant="caption">Current Week</Text>
            </div>

            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-primary-main" />
              <Text variant="caption">Previous Week</Text>
            </div>
          </div>
        </div>
      }
    >
      <div className="min-h-[150px] w-full flex-1">
        <Line {...config} />
      </div>
    </Card>
  );
};

export default TotalSales;

import type { ColumnConfig } from '@ant-design/plots';
import { Column } from '@ant-design/plots';

import { nFormatter } from '../../../../utils/misc';
import Card from '../../../lib/Card';
import { data } from './data';

const colors = [
  '#D09F86',
  '#566577',
  '#1C1C1C',
  '#F86822',
  '#FEC1A4',
  '#FFB693',
];

const SalesByRegion = () => {
  const config: ColumnConfig = {
    data,
    xField: 'region',
    yField: 'sales',
    yAxis: {
      label: {
        formatter: (v: string) => nFormatter(Number(v), 0),
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    columnStyle: {
      borderTop: 70,
    },
    legend: false,
    seriesField: 'region',
    color: colors,
  };

  return (
    <Card title="Sales by Region" className="col-span-2">
      <div className="min-h-[150px] w-full flex-1">
        <Column {...config} />
      </div>
    </Card>
  );
};

export default SalesByRegion;

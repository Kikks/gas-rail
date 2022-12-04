import type { ColumnConfig } from '@ant-design/plots';
import { Column } from '@ant-design/plots';

import Card from '../../../../lib/Card';
import { data } from './data';

const ProjectionsVsActuals = () => {
  const config: ColumnConfig = {
    data,
    isStack: true,
    xField: 'month',
    yField: 'value',
    seriesField: 'type',
    legend: false,
    label: false,
    color: ['#FFB693', '#F86822'],
  };

  return (
    <Card className="col-span-2" title="Projections vs Actuals">
      <Column {...config} />
    </Card>
  );
};

export default ProjectionsVsActuals;

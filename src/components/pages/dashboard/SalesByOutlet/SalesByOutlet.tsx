import type { FC } from 'react';

import Card from '../../../lib/Card';
import Text from '../../../lib/Text';
import type { OutletProps } from './SalesByOutlet.props';

const Outlet: FC<OutletProps> = ({ name, percentage }) => {
  return (
    <div className="grid w-full grid-cols-2">
      <Text variant="caption" className="col-span-1">
        {name}
      </Text>

      <div className="group col-span-1 flex h-4 w-full items-center border-l-2 hover:border-black">
        <div
          className="h-2 rounded-r-full bg-black/10 group-hover:bg-black"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const SalesByOutlet = () => {
  return (
    <Card className="col-span-1 self-stretch" title="Sales By Outlet">
      <div className="flex w-full flex-1 flex-col justify-around gap-5">
        <Outlet name="Ikeja Along" percentage={90} />
        <Outlet name="Ogudu GRA" percentage={50} />
        <Outlet name="Yaba 1" percentage={60} />
        <Outlet name="Yaba 2" percentage={40} />
        <Outlet name="Lekki 1" percentage={70} />
        <Outlet name="Ojota" percentage={50} />
        <Outlet name="Agege 2" percentage={65} />
      </div>
    </Card>
  );
};

export default SalesByOutlet;

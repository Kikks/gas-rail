import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { TransparentSelect } from '../../../components/lib/Select';
import Text from '../../../components/lib/Text';
import GasVolume from '../../../components/pages/outlets/supply/GasVolume';
import Stats from '../../../components/pages/outlets/supply/Stats';
import SupplyOutlet from '../../../components/pages/outlets/supply/SupplyOutlet';
import AuthLayout from '../../../layouts/AuthLayout';
import { timeFilters } from '../../../utils/constants';

const Supply = () => {
  const [activeTank, setActiveTank] = useState(0);

  return (
    <AuthLayout>
      <div className="grid w-full max-w-[1200px] gap-7">
        <div className="flex items-center gap-7 rounded-xl bg-white px-3 py-2">
          <Text variant="caption" className="font-semibold text-primary-main">
            Outlets name:
          </Text>
          <Text variant="caption" className="font-semibold">
            TOTAL Energies Maryland
          </Text>
          <div className="flex items-center gap-2">
            <Icon icon="ph:star-duotone" className="text-2xl" />
            <Link to="/outlets/supply">
              <Text variant="caption" className="font-semibold">
                Supply
              </Text>
            </Link>
            <Text variant="caption">/</Text>
            <Link to="/outlets/retail">
              <Text variant="caption">Retail</Text>
            </Link>
          </div>

          <div className="ml-auto">
            <TransparentSelect options={timeFilters} />
          </div>
        </div>

        <div className="flex w-full flex-wrap gap-7">
          <Stats />
        </div>

        <div className="grid w-full gap-3">
          <Text className="font-semibold">Capacity Level</Text>

          <div className="flex items-center gap-3">
            {Array.from(Array(5)).map((item, index) => (
              <button
                onClick={() => setActiveTank(index)}
                className={`px-5 py-1 ${
                  activeTank === index ? 'bg-primary-light' : 'bg-transparent'
                }`}
              >
                <Text
                  className={`${
                    activeTank === index ? 'font-semibold' : 'font-normal'
                  }`}
                >
                  Tank {index + 1}
                </Text>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-7">
            <GasVolume />
            <SupplyOutlet />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Supply;

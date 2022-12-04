import Card from '../../../lib/Card';
import Text from '../../../lib/Text';

const GasConsumptionLevel = () => {
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
            <Text className="font-semibold">12kg</Text>
          </div>
        </figure>

        <div className="col-span-1 grid w-full grid-cols-2 gap-2 self-stretch">
          <figure className="relative col-span-1 aspect-[5/13] w-full">
            <img
              src="/assets/icons/guage.svg"
              alt="Gas"
              className="h-full w-full object-contain"
            />

            <img
              src="/assets/icons/level-indicator.svg"
              alt=""
              className="absolute bottom-[10%] left-[50%]"
            />
          </figure>

          <div className="flex flex-col items-start justify-between">
            <div className="mt-16 rounded-full bg-[#8ABC82] py-1 px-3">
              <Text className="font-bold text-white">+26.37</Text>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center">
                <Text>0.37</Text>
                <Text className="font-semibold text-black/50">kg</Text>
              </div>

              <Text variant="caption" className="text-xxs text-[#999999]">
                trigger volume level
              </Text>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GasConsumptionLevel;

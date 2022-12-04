import Button from '../../../../lib/Button';
import Heading from '../../../../lib/Heading';
import Text from '../../../../lib/Text';

const SupplyOutlet = () => {
  return (
    <div className="grid content-start justify-items-center gap-10 bg-gradient-to-tl from-[#DC5210] to-[#F86822] p-10">
      <Heading variant="h3" className="text-black">
        Supply this outlet
      </Heading>

      <form className="mx-auto grid w-full max-w-[400px] gap-5">
        <div className="w-full">
          <label className="text-black">You are supplying</label>
          <div className="mt-2 flex items-center gap-3 border border-black px-4 py-1">
            <div className="grid flex-1">
              <input
                type="number"
                placeholder="0"
                className="w-full border-none bg-transparent text-black shadow-none outline-none placeholder:text-black/60"
              />
              <span className="text-xs text-black/70">
                Gas Volume Balance: 5.67M KG
              </span>
            </div>

            <Text className="font-semibold text-black">KG</Text>
          </div>
        </div>

        <div className="w-full">
          <label className="text-black">You are supplying</label>

          <div className="mt-2 flex items-center gap-3 border border-black px-4 py-2">
            <div className="grid flex-1">
              <input
                type="number"
                placeholder="0"
                className="w-full border-none bg-transparent text-black shadow-none outline-none placeholder:text-black/60"
              />
            </div>

            <Text className="font-semibold text-black">NGN</Text>
          </div>
        </div>
      </form>

      <Button
        size="medium"
        variant="black"
        className="mx-auto w-full max-w-[400px] rounded-none py-4"
      >
        Supply
      </Button>
    </div>
  );
};

export default SupplyOutlet;

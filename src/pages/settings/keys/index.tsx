import Button from '../../../components/lib/Button';
import Input from '../../../components/lib/Input';
import Text from '../../../components/lib/Text';
import AuthLayout from '../../../layouts/AuthLayout';
import SettingsLayout from '../../../layouts/SettingsLayout';

const APIKeys = () => {
  return (
    <AuthLayout>
      <SettingsLayout baseUrl="/settings" title="Settings">
        <div className="flex w-full flex-col items-start gap-5 bg-[#FCCEB8] p-10">
          <Text variant="body2" className="mb-5 font-bold">
            API Configuration
          </Text>

          <div className="flex w-full items-end gap-10">
            <div className="w-9/12">
              <Input
                label="Live Secret Key"
                placeholder="Live secret Key"
                containerClassName="rounded-none bg-transparent w-full border border-[#caa593] max-w-none"
                className="font-bold placeholder:text-black/50"
              />
            </div>

            <Button
              variant="black"
              className="w-3/12 rounded-none bg-[#EBE4E4] text-[#333]"
            >
              Create New
            </Button>
          </div>

          <div className="flex w-full items-end gap-10">
            <div className="w-9/12">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none bg-transparent w-full border border-[#caa593] max-w-none"
                className="font-bold placeholder:text-black/50"
              />
            </div>

            <Button
              variant="black"
              className="w-3/12 rounded-none bg-[#EBE4E4] text-[#333]"
            >
              Create New
            </Button>
          </div>

          <div className="flex w-full items-center gap-10">
            <div className="w-9/12">
              <Input
                label="Webhook URL"
                placeholder="Live webhook URL"
                containerClassName="rounded-none bg-transparent border border-[#caa593] max-w-none"
                className="font-bold placeholder:text-black/50"
              />
            </div>

            <div className="w-3/12" />
          </div>

          <Button variant="black" className="mt-5 rounded-none bg-[#333]">
            Save Changes
          </Button>
        </div>
      </SettingsLayout>
    </AuthLayout>
  );
};

export default APIKeys;

import Button from '../../components/lib/Button';
import Input from '../../components/lib/Input';
import Text from '../../components/lib/Text';
import OnboardingLayout from '../../layouts/OnboardingLayout';

const Signup = () => {
  return (
    <OnboardingLayout>
      <div className="flex w-full">
        <aside className="w-[35%] min-w-[400px] self-stretch">
          <figure className="h-full w-full">
            <img
              src="/assets/images/signup-bg.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </figure>
        </aside>

        <div className="grid flex-1 justify-items-start gap-5 bg-primary-main py-20 px-10 text-white">
          <Text className="font-bold" variant="subheading">
            Create Account
          </Text>

          <Text>Create Your User Profile:</Text>

          <div className="grid w-full grid-cols-2 gap-5">
            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>

            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>

            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>
          </div>

          <Text className="mt-5">
            Tell us about your business/organisation:
          </Text>

          <div className="grid w-full grid-cols-2 gap-5">
            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>

            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>
            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>

            <div className="col-span-1">
              <Input
                label="Live Public Key"
                placeholder="Live public Key"
                containerClassName="rounded-none border border-white focus-within:border-white !bg-[rgba(0,0,0,0)]"
                className="font-bold text-white placeholder:text-white/60"
              />
            </div>
          </div>

          <Button className="rounded-none bg-black">Register</Button>
        </div>
      </div>
    </OnboardingLayout>
  );
};

export default Signup;

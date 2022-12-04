import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/lib/Button';
import Checkbox from '../../components/lib/Checkbox';
import Heading from '../../components/lib/Heading';
import Input from '../../components/lib/Input';
import Text from '../../components/lib/Text';
import useToggle from '../../hooks/useToggle';

const Login = () => {
  const navigate = useNavigate();
  const [checked, toggleChecked] = useToggle(false);

  return (
    <div className="grid h-full min-h-screen w-full grid-cols-1 overflow-hidden bg-rails-bg-light lg:grid-cols-2">
      <main className="col-span-1 grid h-full place-items-center overflow-y-auto">
        <form className="flex w-[90%] max-w-[400px] flex-col gap-5">
          <div>
            <Heading>Sign In</Heading>
            <Text className="text-[#898989]">
              Enter your email and password to sign in!
            </Text>
          </div>

          <Input
            label="Email"
            required
            placeholder="Enter your email address"
          />

          <Input
            label="Password"
            required
            type="password"
            placeholder="Enter your password"
            endIcon={
              <Icon
                icon="material-symbols:visibility-outline"
                className="text-xl text-black/20"
              />
            }
          />

          <div className="flex w-full items-center justify-between">
            <Checkbox
              checked={checked}
              onChange={toggleChecked}
              label="Keep me logged in"
            />

            <Link to="/login">
              <Text variant="caption" className="text-primary-main">
                Forgot password?
              </Text>
            </Link>
          </div>

          <Button type="button" onClick={() => navigate('/dashboard')}>
            Sign In
          </Button>
        </form>
      </main>

      <aside className="col-span-1 hidden place-content-center place-items-center gap-10 rounded-bl-[150px] bg-gradient-to-br from-[#FFB693] to-[#F86822] lg:grid lg:h-full">
        <figure className="aspect-square w-[60%] max-w-[300px]">
          <img src="/assets/icons/logo-big.svg" alt="Logo" />
        </figure>

        <div className="rounded-3xl border-2 border-white/20 py-7 px-14 text-center text-white">
          <Text>Learn more about GasRail on</Text>
          <Heading variant="h3" className="font-bold">
            gasrail.com
          </Heading>
        </div>
      </aside>
    </div>
  );
};

export default Login;

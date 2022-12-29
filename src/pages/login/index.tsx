import { Icon } from '@iconify/react';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/lib/Button';
import Checkbox from '../../components/lib/Checkbox';
import Heading from '../../components/lib/Heading';
import Input from '../../components/lib/Input';
import Text from '../../components/lib/Text';
import useAppDispatch from '../../hooks/useAppDispatch';
import useToggle from '../../hooks/useToggle';
import { loginUser } from '../../services/auth';
import { setUserData } from '../../store/slices/userSlice';
import { validateLoginPayload } from '../../utils/validators/auth.validator';
import { isEmpty } from '../../utils/validators/helpers';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [checked, toggleChecked] = useToggle(false);
  const [payload, setPayload] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [showPassword, toggleShowPassword] = useToggle(false);

  const { isLoading, mutate } = useMutation(loginUser, {
    onSuccess(response) {
      if (response?.data) {
        localStorage.setItem('token', response?.data?.token);
        dispatch(setUserData(response?.data?.user));
        navigate('/dashboard');
      }
    },
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      dispatch(setUserData(JSON.parse(user)));
    }
  }, []);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = () => {
    setErrors(initialState);

    const { valid, errors: validationErrors } = validateLoginPayload(payload);

    if (!valid) {
      setErrors(validationErrors);
      return;
    }

    mutate(payload);
  };

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
            name="email"
            value={payload.email}
            onChange={handleChange}
            error={!isEmpty(errors.email)}
            helperText={errors.email}
            type="email"
          />

          <Input
            label="Password"
            required
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            endIcon={
              <Icon
                icon={
                  showPassword
                    ? 'material-symbols:visibility-off-outline'
                    : 'material-symbols:visibility-outline'
                }
                className="cursor-pointer text-xl text-black/20"
                onClick={toggleShowPassword}
              />
            }
            name="password"
            value={payload.password}
            onChange={handleChange}
            error={!isEmpty(errors.password)}
            helperText={errors.password}
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

          <Button type="button" onClick={handleSubmit} loading={isLoading}>
            Sign In
          </Button>

          <Text
            variant="caption"
            className="mx-auto mt-10 flex gap-2 text-center"
          >
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-main hover:underline">
              Sign up here.
            </Link>
          </Text>
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

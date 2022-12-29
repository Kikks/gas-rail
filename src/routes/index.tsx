import type { FC } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Customers from '../pages/customers';
import Customer from '../pages/customers/customer';
import Dashboard from '../pages/dashboard';
import Login from '../pages/login';
import Order from '../pages/order';
import Retail from '../pages/outlets/retail';
import Supply from '../pages/outlets/supply';
import Business from '../pages/settings/business';
import APIKeys from '../pages/settings/keys';
import Profile from '../pages/settings/profile';
import Security from '../pages/settings/security';
import Signup from '../pages/signup';

const Redirect: FC<{ route: string }> = ({ route }) => {
  useEffect(() => {
    window.location.href = route;
  }, []);

  return <></>;
};

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Redirect route="/login" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/order" element={<Order />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<Customer />} />
      <Route path="/outlets/supply" element={<Supply />} />
      <Route path="/outlets/retail" element={<Retail />} />
      <Route path="/support" element={<Dashboard />} />
      <Route
        path="/settings"
        element={<Redirect route="/settings/profile" />}
      />
      <Route path="/settings/profile" element={<Profile />} />
      <Route path="/settings/security" element={<Security />} />
      <Route path="/settings/business" element={<Business />} />
      <Route path="/settings/keys" element={<APIKeys />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default ApplicationRoutes;

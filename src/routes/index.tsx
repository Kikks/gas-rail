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

const Redirect: FC<{ route: string }> = ({ route }) => {
  useEffect(() => {
    window.location.href = route;
  }, []);

  return <></>;
};

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Redirect route="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/order" element={<Order />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<Customer />} />
      <Route path="/outlets/supply" element={<Supply />} />
      <Route path="/outlets/retail" element={<Retail />} />
      <Route path="/support" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default ApplicationRoutes;

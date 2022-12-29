import { configureStore } from '@reduxjs/toolkit';

import businessSlice from './slices/businessSlice';
import dashboardStatsSlice from './slices/dashboardStatsSlice';
import devicesSlice from './slices/devicesSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    business: businessSlice,
    devices: devicesSlice,
    dashboardStats: dashboardStatsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

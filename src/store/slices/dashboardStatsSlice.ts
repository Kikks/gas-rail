import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type Stats = {
  [key: string]: number | string | boolean;
};

const initialState: {
  stats: Stats;
} = {
  stats: {},
};

const dashboardSliceSlice = createSlice({
  name: 'dashboardStats',
  initialState,
  reducers: {
    setDashboardStats(state, action: PayloadAction<Stats>) {
      state.stats = action.payload;
    },
    clearDashboardStats(state) {
      state.stats = {};
    },
  },
});

export const { setDashboardStats, clearDashboardStats } =
  dashboardSliceSlice.actions;
export default dashboardSliceSlice.reducer;

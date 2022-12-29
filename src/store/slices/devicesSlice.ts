import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type IDevice from '../../types/Device.type';

const initialState: { devices: IDevice[] } = {
  devices: [],
};

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices(state, action: PayloadAction<IDevice[]>) {
      state.devices = action.payload;
    },
    clearDevices(state) {
      state.devices = [];
    },
  },
});

export const { setDevices, clearDevices } = devicesSlice.actions;
export default devicesSlice.reducer;

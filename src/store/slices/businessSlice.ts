import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type IBusiness from '../../types/Business.type';

const initialState: { business: IBusiness | null } = {
  business: null,
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {
    setBusinessData(state, action: PayloadAction<IBusiness>) {
      state.business = action.payload;
    },
    clearBusinessData(state) {
      state.business = null;
    },
  },
});

export const { setBusinessData, clearBusinessData } = businessSlice.actions;
export default businessSlice.reducer;

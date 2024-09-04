import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import meterReadingsReducer from '../features/meterReadings/meterReadingsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    meterReadings: meterReadingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MeterReading {
  meterReadingId: number;
  meterReadingDate: string;
  meterReadingType: 'Gas' | 'Electricity';
  readingValue: string;
  createdDateTime: string;
}

interface MeterReadingState {
  meterReadings: MeterReading[];
}

const initialState: MeterReadingState = {
  meterReadings: [
    {
      meterReadingId: 1,
      meterReadingDate: '2024-04-19T00:00:00Z',
      meterReadingType: 'Gas',
      readingValue: '07125',
      createdDateTime: '2024-04-19T09:51:23.797Z',
    },
    {
      meterReadingId: 2,
      meterReadingDate: '2024-04-19T00:00:00Z',
      meterReadingType: 'Electricity',
      readingValue: '00689',
      createdDateTime: '2024-04-19T09:52:01.298Z',
    },
  ],
};

const meterReadingsSlice = createSlice({
  name: 'meterReadings',
  initialState,
  reducers: {
    addMeterReading: (state, action: PayloadAction<MeterReading>) => {
      state.meterReadings.push(action.payload);
    },
  },
});

export const { addMeterReading } = meterReadingsSlice.actions;
export default meterReadingsSlice.reducer;
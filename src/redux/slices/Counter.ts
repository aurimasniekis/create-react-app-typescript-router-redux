import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from '../index';

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: -1,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(
      state: CounterState,
    ): void {
      state.value += 1;
    },
  },
});

export const increment = (): AppThunk => async (dispatch): Promise<void> => {
  dispatch(slice.actions.increment());
};

export const { reducer } = slice;

export default slice;

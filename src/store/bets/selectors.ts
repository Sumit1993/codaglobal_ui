import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.bets || initialState;

export const selectBets = createSelector(
  [selectDomain],
  betsState => betsState,
);

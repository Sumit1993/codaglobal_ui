import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Participant } from './types';

// The initial state of the Home container
export const initialState: ContainerState = {
  participants: [],
  loading: false,
  error: null,
  searchText: '',
};

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    setSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload;
    },
    loadBets(state) {
      state.loading = true;
      state.error = null;
      state.participants = [];
    },
    betsLoaded(state, action: PayloadAction<Participant[]>) {
      const repos = action.payload.map((participant, i) =>
        Object.assign({}, participant, {
          id: i,
          selected: false,
          level: Math.floor(Math.random() * 10) + 1,
          win: Math.floor(Math.random() * 50) + 1,
          lost: Math.floor(Math.random() * 10) + 1,
          fate: '',
          winnings: 0,
        }),
      );
      state.participants = repos;
      state.loading = false;
    },
    betsLoadError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    toggleSelection(state, action: PayloadAction<number>) {
      state.participants[
        state.participants.findIndex(item => item.id === action.payload)
      ].selected = !state.participants[
        state.participants.findIndex(item => item.id === action.payload)
      ].selected;
    },
    setWinner(state, action: PayloadAction<number>) {
      state.participants[
        state.participants.findIndex(item => item.id === action.payload)
      ].fate = 'Win';
      state.participants[
        state.participants.findIndex(item => item.id === action.payload)
      ].winnings = 0;
    },
    setLooser(state, action: PayloadAction<number>) {
      state.participants[
        state.participants.findIndex(item => item.id === action.payload)
      ].fate = 'Loss';
      state.participants[
        state.participants.findIndex(item => item.id === action.payload)
      ].winnings =
        Number.parseInt(
          state.participants[
            state.participants.findIndex(item => item.id === action.payload)
          ].Price,
        ) * 2;
    },
  },
});

export const { actions: betsActions, reducer, name: sliceKey } = betsSlice;

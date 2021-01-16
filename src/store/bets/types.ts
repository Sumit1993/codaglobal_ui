/* --- STATE --- */
export interface Participant {
  id: number;
  Name: string;
  Price: string;
  Bet: string;
  'Profile Image': string;
  selected: boolean;
  level: number;
  win: number;
  lost: number;
  fate: 'Win' | 'Loss';
  winnings: number;
}

export interface BetsState {
  participants: Array<Participant>;
  searchText: string;
  loading: boolean;
  error: any;
}

export type ContainerState = BetsState;

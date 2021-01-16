import { call, put, takeLatest } from 'redux-saga/effects';
import { betsActions } from './slice';
import { Participant } from './types';
import { request } from 'utils/request';

// export function* doSomething() {}

export function* loadBets() {
  const requestURL = `https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json`;
  try {
    // Call our request helper (see 'utils/request')
    const participants: Participant[] = yield call(request, requestURL);
    if (participants?.length > 0) {
      yield put(betsActions.betsLoaded(participants));
    } else {
      yield put(betsActions.betsLoadError('Load Error'));
    }
  } catch (err) {
    yield put(betsActions.betsLoadError('Load Error'));
  }
}

export function* betsSaga() {
  yield takeLatest(betsActions.loadBets.type, loadBets);
}

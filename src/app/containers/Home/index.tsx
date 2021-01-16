/**
 *
 * Home
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { betsActions, reducer, sliceKey } from '../../../store/bets/slice';
import { selectBets } from '../../../store/bets/selectors';
import { betsSaga } from '../../../store/bets/saga';
import { messages } from './messages';
import { Col, Container, Row } from 'react-bootstrap';
import { SelectedBets } from '../../components/SelectedBets/Loadable';
import { ParticipantsList } from '../../components/ParticipantsList/Loadable';

interface Props {}

export function Home(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: betsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const betsData = useSelector(selectBets);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    if (betsData.participants.length === 0) dispatch(betsActions.loadBets());
  }, []);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Container fluid style={{ height: '100vh' }} className="p-0">
        <Row noGutters className="h-100">
          <Col xs={3}>
            <SelectedBets />
          </Col>
          <Col xs={9}>
            <ParticipantsList participants={betsData.participants} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

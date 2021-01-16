/**
 *
 * OpposingBets
 *
 */

import * as React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { ParticipantCard } from '../../components/ParticipantCard';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from '../../../store/bets/slice';
import { messages } from './messages';
import { useSelector } from 'react-redux';
import { betsSaga } from '../../../store/bets/saga';
import { selectBets } from '../../../store/bets/selectors';
import { useHistory } from 'react-router-dom';

interface Props {}

export function OpposingBets(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: betsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const betsData = useSelector(selectBets);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const history = useHistory();

  if (betsData.participants.length === 0) {
    history.replace('/');
    return null;
  }
  const selectedParticipants = betsData.participants.filter(
    participant => participant.selected,
  );
  const winner =
    selectedParticipants[
      Math.floor(Math.random() * selectedParticipants.length)
    ].id;

  return (
    <>
      <Helmet>
        <title>OpposingBets</title>
        <meta name="description" content="Description of OpposingBets" />
      </Helmet>
      <Div>
        <Container
          fluid
          className="p-0"
          style={{
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row className="justify-content-center pt-5">
            {selectedParticipants.slice(0, 4).map(participant => (
              <Col xs={2} key={participant.id}>
                <ParticipantCard
                  participant={participant}
                  result={winner === participant.id}
                ></ParticipantCard>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            <svg width="150" height="150">
              <circle cx="75" cy="75" r="50" fill="#aeaeae" />
              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                fill="white"
                font-size="50px"
                font-family="Arial"
                dy=".3em"
              >
                {selectedParticipants.length}
              </text>
              Sorry, your browser does not support inline SVG.
            </svg>
          </Row>
          <Row className="justify-content-center">
            {selectedParticipants.slice(4, 8).map(participant => (
              <Col xs={2} key={participant.id}>
                <ParticipantCard
                  participant={participant}
                  result={winner === participant.id}
                ></ParticipantCard>
              </Col>
            ))}
          </Row>
          <Button
            style={{ position: 'absolute', bottom: 10, left: 10 }}
            variant="primary"
            onClick={() => history.goBack()}
          >
            Back
          </Button>
        </Container>
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: #e9eff1;
`;

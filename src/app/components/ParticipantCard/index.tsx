/**
 *
 * ParticipantCard
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Card, Row, Col } from 'react-bootstrap';
import { FaDotCircle, FaRegDotCircle, FaTrophy } from 'react-icons/fa';
import { Participant } from '../../../store/bets/types';

interface Props {
  participant: Participant;
  result: boolean;
}

export function ParticipantCard(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Card
      style={{ flex: '0 0 33.3%', borderColor: props.result ? 'green' : 'red' }}
    >
      <Card.Body>
        <Row noGutters>
          <Col>
            <Avatar src={props.participant['Profile Image']}></Avatar>
          </Col>
          <Col>
            <p
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                margin:0
              }}
            >
              {props.participant.Name}
            </p>
            <p>{props.participant.level}</p>
          </Col>
        </Row>
        <Row noGutters className="mt-4 align-items-center">
          <Col>
            <FaDotCircle /> {props.participant.Price}
          </Col>
          <Col>
            <FaRegDotCircle /> {props.participant.Bet}
          </Col>
        </Row>
        <Row noGutters className="mb-4 align-items-center">
          <Col>
            <FaTrophy /> {props.participant.win}
          </Col>
        </Row>
      </Card.Body>
      {props.result ? <WinText>WINNER</WinText> : <LooseText>LOSE</LooseText>}
    </Card>
  );
}

const Avatar = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 5px;
`;
const WinText = styled.p`
  margin: 0;
  text-align: center;
  background: green;
  color: white;
  width: 50%;
  border-top-right-radius: 5px;
  align-self: center;
  border-top-left-radius: 5px;
`;
const LooseText = styled.p`
  margin: 0;
  text-align: center;
  background: red;
  color: white;
  width: 50%;
  border-top-right-radius: 5px;
  align-self: center;
  border-top-left-radius: 5px;
`;

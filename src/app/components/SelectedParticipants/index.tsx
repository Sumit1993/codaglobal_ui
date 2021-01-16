/**
 *
 * SelectedParticipants
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Button, Col, Row } from 'react-bootstrap';
import { FaDotCircle, FaRegDotCircle, FaTrophy } from 'react-icons/fa';
import { Participant } from '../../../store/bets/types';
import { useHistory } from 'react-router-dom';

interface Props {
  participants: Participant[];
}

export function SelectedParticipants(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const history = useHistory();

  return (
    <Div>
      <GraphicsSection />
      <BottomSection>
        <Heading className="m-4 align-items-center">
          Select Playing{' '}
          {
            props.participants.filter(participant => participant.selected)
              .length
          }
        </Heading>
        <SelectedListContainer>
          {props.participants.map(
            participant =>
              participant.selected && (
                <Row noGutters className="m-4 align-items-center">
                  <Col>
                    <Avatar src={participant['Profile Image']}></Avatar>
                  </Col>
                  <Col xs={6}>
                    <Row>
                      <Col>{participant.Name}</Col>
                    </Row>
                    <Row>
                      <Col>
                        <FaTrophy /> {participant.win}
                      </Col>
                      <Col>
                        <FaRegDotCircle /> {participant.Bet}
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <FaDotCircle /> {participant.Price}
                  </Col>
                </Row>
              ),
          )}
        </SelectedListContainer>
        <ButtonContainer>
          <Button
            variant="primary"
            className="w-50"
            onClick={() => history.push('/opposingBets')}
          >
            Start
          </Button>
        </ButtonContainer>
      </BottomSection>
    </Div>
  );
}
const Heading = styled.em`
  color: #5c4ddf;
`;
const Div = styled.div`
  background-color: #ebf0f2;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
const Avatar = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 5px;
`;
const GraphicsSection = styled.div`
  display: flex;
  flex: 0.4;
`;
const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.6;
`;
const SelectedListContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 25em;
  min-height: 25em;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex: 0.1;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

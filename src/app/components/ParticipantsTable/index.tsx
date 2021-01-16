/**
 *
 * ParticipantsTable
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { betsActions } from '../../../store/bets/slice';
import { messages } from './messages';
import { Table, Image } from 'react-bootstrap';
import { Participant } from '../../../store/bets/types';
import { useDispatch } from 'react-redux';

interface Props {
  participants: Participant[];
}

export function ParticipantsTable(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  return (
    <Div>
      <Table
        hover
        style={{
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <thead>
          <tr>
            <th>SELECT</th>
            <th style={{ textAlign: 'left' }}>PLAYER NAME</th>
            <th>LEVEL</th>
            <th>AVATAR</th>
            <th>BET</th>
            <th>WINS</th>
            <th>LOST</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {props.participants.slice(0, 10).map(participant => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  checked={participant.selected}
                  onClick={() =>
                    dispatch(betsActions.toggleSelection(participant.id))
                  }
                />
              </td>
              <td style={{ textAlign: 'left' }}>{participant.Name}</td>
              <td>{participant.level}</td>
              <td>
                <Image
                  style={{ width: '2em' }}
                  src={participant['Profile Image']}
                  rounded
                />
              </td>
              <td>{participant.Bet}</td>
              <td>{participant.win}</td>
              <td>{participant.lost}</td>
              <td>{participant.Price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Div>
  );
}

const Div = styled.div``;

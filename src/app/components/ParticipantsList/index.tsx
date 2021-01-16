/**
 *
 * ParticipantsList
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Participant } from '../../../store/bets/types';
import { SearchPanel } from '../SearchPanel';
import { ParticipantsTable } from '../ParticipantsTable';

interface Props {
  participants: Participant[];
}

export function ParticipantsList(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div className="h-100 p-5">
      <SearchPanel />
      <ParticipantsTable participants={props.participants} />
    </Div>
  );
}

const Div = styled.div`
  background-color: #f0f4f6;
`;

/**
 *
 * SearchPanel
 *
 */
import * as React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Participant } from '../../../store/bets/types';
import { messages } from './messages';
import { betsActions } from '../../../store/bets/slice';

interface Props {
  participants: Participant[];
}

export function SearchPanel(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const [textInput, setInput] = React.useState('');

  React.useEffect(() => {
    dispatch(betsActions.setSearchText(textInput));
  }, [textInput]);

  return (
    <Div>
      <Heading>
        Select Playing{' '}
        {props.participants.filter(participant => participant.selected).length}
      </Heading>
      <InputGroup className="mb-3 w-25">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <FaSearch />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Search Players"
          aria-label="Search Players"
          aria-describedby="basic-addon1"
          onChange={event => setInput(event.target.value)}
        />
      </InputGroup>
    </Div>
  );
}

const Div = styled.div`
  height: 10em;
  justify-content: space-evenly;
  flex-direction: column;
  display: flex;
`;

const Heading = styled.h5`
  color: #5c4ddf;
`;

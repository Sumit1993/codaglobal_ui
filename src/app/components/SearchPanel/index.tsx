/**
 *
 * SearchPanel
 *
 */
import * as React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { messages } from './messages';

interface Props {}

export function SearchPanel(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Div>
      <Heading>Select Playing 9</Heading>
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

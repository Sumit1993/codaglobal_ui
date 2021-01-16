import * as React from 'react';
import { render } from '@testing-library/react';

import { ParticipantsList } from '..';

describe('<ParticipantsList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ParticipantsList participants={[]} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});

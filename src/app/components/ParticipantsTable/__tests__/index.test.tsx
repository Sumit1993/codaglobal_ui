import * as React from 'react';
import { render } from '@testing-library/react';

import { ParticipantsTable } from '..';

describe('<ParticipantsTable  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ParticipantsTable participants={[]} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});

import * as React from 'react';
import { render } from '@testing-library/react';

import { SelectedParticipants } from '..';

describe('<SelectedParticipants  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SelectedParticipants participants={[]} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});

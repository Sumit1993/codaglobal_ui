import * as React from 'react';
import { render } from '@testing-library/react';

import { SelectedBets } from '..';

describe('<SelectedBets  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SelectedBets />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});

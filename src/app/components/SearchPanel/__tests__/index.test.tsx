import * as React from 'react';
import { render } from '@testing-library/react';

import { SearchPanel } from '..';

describe('<SearchPanel  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SearchPanel participants={[]} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});

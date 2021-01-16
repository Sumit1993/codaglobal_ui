import * as React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { OpposingBets } from '..';

const renderComponent = () =>
  render(
      <HelmetProvider>
        <OpposingBets  />
      </HelmetProvider>
  );

describe('<OpposingBets />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});

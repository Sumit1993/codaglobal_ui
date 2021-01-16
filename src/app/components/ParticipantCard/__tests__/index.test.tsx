import * as React from 'react';
import { render } from '@testing-library/react';

import { ParticipantCard } from '..';

describe('<ParticipantCard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <ParticipantCard
        participant={{
          id: 1,
          Name: 'Richard',
          Price: '2000',
          Bet: '5',
          'Profile Image':
            'https://s3-ap-southeast-1.amazonaws.com/he-public-data/richarde8624aa.jpg',
          selected: false,
          level: 1,
          win: 1,
          lost: 1,
          fate: 'Loss',
          winnings: 0,
        }}
        result={false}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});

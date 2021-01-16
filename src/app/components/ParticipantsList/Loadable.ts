/**
 *
 * Asynchronously loads the component for ParticipantsList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ParticipantsList = lazyLoad(
  () => import('./index'),
  module => module.ParticipantsList,
);

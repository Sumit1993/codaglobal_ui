/**
 *
 * Asynchronously loads the component for SelectedBets
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SelectedBets = lazyLoad(
  () => import('./index'),
  module => module.SelectedBets,
);

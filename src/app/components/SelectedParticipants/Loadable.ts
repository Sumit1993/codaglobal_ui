/**
*
* Asynchronously loads the component for SelectedParticipants
*
*/

import { lazyLoad } from 'utils/loadable';

export const SelectedParticipants = lazyLoad(() => import('./index'), module => module.SelectedParticipants);
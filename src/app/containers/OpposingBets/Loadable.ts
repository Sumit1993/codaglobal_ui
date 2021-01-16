/**
*
* Asynchronously loads the component for OpposingBets
*
*/

import { lazyLoad } from 'utils/loadable';

export const OpposingBets = lazyLoad(() => import('./index'), module => module.OpposingBets);
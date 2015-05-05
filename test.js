
/**
 * test
 */

import sin from './index';
import { noise } from './index';

export function dsp(t) {
   return (sin(t,440) + noise()) * 0.1
}

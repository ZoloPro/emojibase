/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { flattenEmojiData } from 'emojibase';
import loadEmojiData from './loadEmojiData';

let DATA: object[] = [];

// TODO
export default function loadFlatEmojiData(): object[] {
  if (DATA.length > 0) {
    return DATA;
  }

  DATA = flattenEmojiData(loadEmojiData());

  return DATA;
}

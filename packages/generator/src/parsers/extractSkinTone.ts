/**
 * @copyright   2017-2018, Miles Johnson
 * @license     https://opensource.org/licenses/MIT
 */

import { SkinTone } from '../types';

export default function extractSkinTone(name: string): SkinTone | null {
  const type = name.match(/TYPE-(\d)/);

  if (!type) {
    return null;
  }

  const tone = parseFloat(type[1]);

  // Our data is 1, 2, 3, 4, 5, while unicode data is 1-2, 3, 4, 5, 6.
  // This is because type 1 and 2 on the Fitzpatrick scale are a combined tone.
  // https://en.wikipedia.org/wiki/Fitzpatrick_scale
  // @ts-ignore
  return tone > 1 ? tone - 1 : tone;
}
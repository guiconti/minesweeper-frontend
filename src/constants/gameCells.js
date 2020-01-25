export const UNKNOWN = '';
export const BLANK = ' ';
export const MINE = '💣';
export const FLAG = '🚩';
export const QUESTION = '❓';
export const ONE_ADJACENT = '1';
export const TWO_ADJACENT = '2';
export const THREE_ADJACENT = '3';
export const FOUR_ADJACENT = '4';
export const FIVE_ADJACENT = '5';
export const SIX_ADJACENT = '6';
export const SEVEN_ADJACENT = '7';
export const EIGHT_ADJACENT = '8';

export default {
  '*': UNKNOWN,
  '.': BLANK,
  'M': MINE,
  'F': FLAG,
  '?': QUESTION,
  '1': ONE_ADJACENT,
  '2': TWO_ADJACENT,
  '3': THREE_ADJACENT,
  '4': FOUR_ADJACENT,
  '5': FIVE_ADJACENT,
  '6': SIX_ADJACENT,
  '7': SEVEN_ADJACENT,
  '8': EIGHT_ADJACENT,
};

import {test,expect} from 'jest'

import { add } from './add';
// eslint-disable-next-line no-undef
test('two plus two is four', () => {
  expect(add(2, 2)).toBe(4);
  
});

import { ADD2, MINUS2 } from '../action-types';
const add = (payload) => ({ type: ADD2, payload });
const minus = (payload) => ({ type: MINUS2, payload });
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  add,
  minus,
};

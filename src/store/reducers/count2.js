import { ADD2, MINUS2 } from '../action-types';
let initState = { number: 0 };
function reducer(state = initState, action) {
  switch (action.type) {
    case ADD2:
      return { number: state.number + (action.payload || 1) };
    case MINUS2:
      return { number: state.number - (action.payload || 1) };
    default:
      return state;
  }
}
export default reducer;

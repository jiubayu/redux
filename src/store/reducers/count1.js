import {ADD1,MINUS1} from '../action-types'
let initState = { number: 0 };
function reducer(state = initState, action) {
  switch (action.type) {
    case ADD1:
      return { number: state.number + (action.payload || 1) };
    case MINUS1:
      return { number: state.number - (action.payload || 1) };
    default:
      return state;
  }
}
export default reducer;

/**
 * 将多个reducer合并成一个reducers
 * @param {*} reducers  reducers对象 {counter1: ()=>{}, counter2: ()=>{}}
 */
function combineReducers(reducers) {
  return function combineReducer(state={},action) {
    let nextState = {};
    for(let key in reducers) {
      let previrousStateForKey = state[key];
      let reducerForKey = reducers[key];
      nextState[key] = reducerForKey(previrousStateForKey, action);
    }
    return nextState;
  }
}
export default combineReducers;;
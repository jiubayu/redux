function bindActionCreator(actionCreator, dispatch){
  return (...args) => dispatch(actionCreator(...args));
}
function bindActionCreators(actionCreators, dispatch) {
  let bindActionCreators = {};
  for(let key in actionCreators) {
    const actionCreator = actionCreators[key];
    bindActionCreators[key] = bindActionCreator(actionCreator, dispatch);
  }
  return bindActionCreators;
}
export default bindActionCreators;
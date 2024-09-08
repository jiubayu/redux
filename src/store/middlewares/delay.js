function delay() {
  return function (next) {
    return function (action) {
      // 最终会返回新的dispatch
      setTimeout(() => {
        next(action);
      },2000)
    };
  };
}
export default delay;
// function logger({ getState }) {
//   return function (next) {
//     return function (action) {
//       // 最终会返回新的dispatch
//       debugger;
//       console.log('previousState', getState());
//       next(action); // 调用原始的dispatch
//       console.log('nextState', getState());
//     };
//   };
// }

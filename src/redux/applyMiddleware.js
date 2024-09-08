/**
 * const store = applyMiddleware(logger)(createStore)(reducers);
 */

function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce(
    (a, b) =>
      (...args: any) =>
        a(b(...args))
  )
}

function applyMiddleware(...middlewares) {
  return function (createStore) {
    return function (reducer, preloadedState) {
      const store = createStore(reducer, preloadedState);
      // ! 支持单个中间件
      // const middleAPI = {getState: store.getState}
      // const dispatch = middleware(middleAPI)(store.dispatch);

      // 支持多个中间件
      let dispatch = () => { }; // 初始化
      const middleAPI = {
        getState: store.getState,
        // dispatch
        dispatch: (action, ...args) => dispatch(action, ...args)
      }
      const chain = middlewares.map(middleware => middleware(middleAPI));
      dispatch = compose(...chain)(store.dispatch);
      return {
        ...store,
        dispatch, // 重写dispatch，覆盖之前的dispatch
      };
    }
  }

  // return createStore => (reducer, preloadedState) => {
  //   const store = createStore(reducer, preloadedState)
  //   let dispatch = () => {
  //     throw new Error(
  //       'Dispatching while constructing your middleware is not allowed. ' +
  //       'Other middleware would not be applied to this dispatch.'
  //     )
  //   }

  //   const middlewareAPI = {
  //     getState: store.getState,
  //     dispatch: (action, ...args) => dispatch(action, ...args)
  //   }
  //   const chain = middlewares.map(middleware => middleware(middlewareAPI))
  //   dispatch = compose(...chain)(store.dispatch)

  //   return {
  //     ...store,
  //     dispatch
  //   }
  // }
}
export default applyMiddleware;

// function logger({ getState }) {
//   return function (next) {
//     return function (action) {
//       // 最终会返回新的dispatch
//       console.log('previousState', getState());
//       next(action); // 调用原始的dispatch
//       console.log('nextState', getState());
//     };
//   };
// }
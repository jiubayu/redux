function createStore(reducer,preloadState, enhancer) {
  if(typeof enhancer == 'function') {
    return enhancer(createStore)(reducer, preloadState);
  }
  let state = preloadState;
  // 创造监听函数的数组
  let listeners = [];
  function getState() {
    return state;
  }
  
  function dispatch(action) {
    state = reducer(state, action);
    // 状态一旦发生变化后，所有的监听函数都要进行执行
    listeners.forEach(listener => listener&&listener());
  }
  function subscribe(listener) {
    listeners.push(listener);
    return () => listeners = listeners.filter(l => l !== listener);
  }
  dispatch({type: '@@REDUX/INIT'});
  return {
    getState,
    dispatch,
    subscribe,
  };
}
export default createStore;

// 20240726
function createStore2(reducer, preloadState) {
  let state = preloadState;
  let observers = [];
  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    // 如果有监听的函数，需要执行
    observers.forEach(observer => {
      observer && observer();
    })
  }

  function subscribe(fn) {
    observers.push(fn);
    return () => observers = observers.filter(l => l !== fn);
  }

  return {
    getState, // 获取state
    dispatch, // 设置state
    subscribe, // 派发更新
  }
}
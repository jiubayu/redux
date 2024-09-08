import { createStore, applyMiddleware } from "../redux";
import combineReducer from './reducers';
// import logger from './middlewares/logger';
import thunk from './middlewares/delay';
import logger from 'redux-logger';
// const store = applyMiddleware(logger)(createStore)(combineReducer);
const store = createStore(combineReducer, 0, applyMiddleware(thunk, logger));



// const originDispatch = store.dispatch;
// // 异步中间件
// store.dispatch = function(action) {
//   setTimeout(() => {
//     originDispatch(action);
//   },2000)
// }
// // 日志中间件
// store.dispatch = function(action) {
//   console.log('previousState', store.getState());
//   originDispatch(action);
//   console.log('nextState', store.getState());
// }
export default store;
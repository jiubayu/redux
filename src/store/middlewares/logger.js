/**
 * 日志中间件
 * @param {*} getState 获取仓库状态 
 * @param {*} dispatch 派发仓库动作
 */
function logger({getState}) {
  return function(next) { 
     return function (action) { // 最终会返回新的dispatch
       console.log('previousState', getState());
       next(action);// 调用原始的dispatch
       console.log('nextState', getState());
     };
  }
}
export default logger;
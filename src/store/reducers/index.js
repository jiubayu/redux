import {combineReducers} from '../../redux';
import counter1 from './count1';
import counter2 from './count2';
const combineReducer = combineReducers({
  counter1,
  counter2,
});
// console.log(combineReducer, 'combineReducer--');
export default combineReducer;
/**
 * 合并后的reducers也会对应一个合并后的状态对象
 * 也就是说state = {
 *  counter1Reducer: {number:0},
 * counter2Reducer: {number: 0}
 * }
 */

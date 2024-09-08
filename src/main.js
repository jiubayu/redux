import { createStore } from './redux';
let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let minusBtn = document.getElementById('minus-btn');

const INCREMENT = 'INCREMENT';
const MINUS = 'MINUS';
let initState = 0;
function reducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(reducer, 100);
console.log(store, 'store');
function render() {
  counterValue.innerHTML = store.getState();
}
// 订阅仓库中的变化事件，当仓库中的状态发生变化时执行render方法
let unsubscibe = store.subscribe(render);
// setTimeout(() => unsubscibe(), 3000);
render();
incrementBtn.addEventListener('click', () => {
  store.dispatch({ type: INCREMENT });
});
minusBtn.addEventListener('click', () => {
  store.dispatch({ type: MINUS });
});

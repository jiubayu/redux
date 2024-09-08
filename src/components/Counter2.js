import { Component } from 'react';
import { bindActionCreators } from '../redux';
import store from '../store';
import actionCreators from '../store/actionCreators/count2';

const { getState, dispatch, subscribe } = store;

const { add, minus } = bindActionCreators(actionCreators, dispatch);

class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = getState().counter2;
  }
  componentDidMount() {
    let unsubscibe = subscribe(() => {
      this.setState({
        number: getState().counter2.number,
      });
    });
  }
  render() {
    return (
      <>
        <p>{this.state.number}</p>
        <button onClick={() => add(1)}>+</button>
        <button onClick={() => minus(2)}>-</button>
      </>
    );
  }
}
export default Counter2;

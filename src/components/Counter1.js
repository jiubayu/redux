import { Component } from "react";
import { bindActionCreators } from "../redux";
import store from "../store";
import actionCreators from '../store/actionCreators/count1';
import { connect, connect_fn } from '../react-redux';

// 把action和方法映射起来
// const { add, minus } = bindActionCreators(actionCreators, dispatch);
class Counter1 extends Component {
  constructor(props) {
    super(props);
    this.state = 0;
  }
  render() {
    const { add, minus } = this.props;
    console.log(this.props, 'props----')
    return (
      <>
        <p>{this.props.number}</p>
        <button onClick={() => add(5)}>+</button>
        <button onClick={() => minus(2)}>-</button>
        <button onClick={()=>{
          setTimeout(() => add(5),2000)
        }}>异步➕</button>
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log(state,' state----')
  return state.counter1
}
  ;
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
import React, { Component, useMemo } from "react";
import { ReactReduxContext } from './ReactReduxContext';
import { bindActionCreators } from "../redux";
/**
 * 关联组件和仓库
 * @param {*} mapStateToProps 把仓库中状态映射为组件的属性对象
 * @param {*} mapDispatchToProps 把仓库中dispatch方法映射为组件的属性对象
 */
function connect(mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return class extends Component {
      static contextType = ReactReduxContext;
      constructor(props, context) {
        super(props);
        // 1 获取context中的仓库
        const { store } = context;
        console.log(store, 'store----')
        const { getState, dispatch, subscribe } = store;
        // 从仓库中映射出新的状态变成属性对象传递给老组件
        this.state = mapStateToProps(getState());
        let dispatchProps;
        if (typeof mapDispatchToProps === 'function') {
          dispatchProps = mapDispatchToProps(dispatch);
        } else if (typeof mapDispatchToProps === 'object') {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        }
        this.dispatchProps = dispatchProps;
        this.unsubscribe = subscribe(() => {
          this.setState(mapStateToProps(getState()));
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        return (
          <>
            <OldComponent
              {...this.props}
              {...this.state}
              {...this.dispatchProps}
            />
          </>
        );
      }
    };
  }
}
export default connect;

function connect_fn(mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return function(props) {
       const { store } = React.useContext(ReactReduxContext);
       const { getState, dispatch, subscribe } = store;
       const previousState = getState();
       const stateProps = useMemo(() => {
         return mapStateToProps(previousState);
       }, [previousState]);
       const dispatchProps = useMemo(() => {
         let dispatchProps;
         if (typeof mapDispatchToProps === 'function') {
           dispatchProps = mapDispatchToProps(dispatch);
         } else if (typeof mapDispatchToProps === 'object') {
           dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
         }
         return dispatchProps;
       }, [dispatch]);
       return <OldComponent {...stateProps} {...dispatchProps} {...props} />;
    }
  }
}
export { connect_fn };
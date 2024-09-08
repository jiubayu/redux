## redux
### 设计目的
解决state里的数据问题。比如兄弟之间的数据通信问题

### 设计思路
- Redux将整个应用状态存储到一个地方，称为store
- 里面保存一棵state tree
- 组件可以派发（dispatch）行为（action）给store，而不是直接通知其他组件
- 其他组件可以通过订阅store中的状态（state）来刷新自己的视图

### 三大设计原则
- 1 整个应用的状态存储在一棵Object Tree中，并且这个Object Tree中只存在于唯一一个store中。
- 2 State是只读的，唯一改变state的方法是触发action，action是一个用于描述已发生事件的普通对象，使用纯函数来执行修改，为了描述action如何修改state tree，你需要编写reducers。
- 3 单一数据源的设计让React组件之间的通信更加方便，同时也便于状态的同一管理。

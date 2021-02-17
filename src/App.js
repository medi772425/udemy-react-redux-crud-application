//クラスコンポーネントを使用する場合は、{ Component } の記載が必要
import React, { Component } from 'react';

//関数コンポーネント
const App = () =>(<Counter></Counter>)

//クラスコンポーネント
class Counter extends Component {
  //コンポーネントの初期化時に動作する
  //propsの受け取りが可能
  constructor(props){
    //親クラスへ初期化？的な
    super(props);
    this.state = { count: 0 }
  }

  hundlePlusButton = () =>{
    //stateを変更する際に使うお決まりのメソッド
    //setState()を使用せずに直接値を変更したりすると、画面は変わらない。
    //setState()を使用したときにrender()が動作する
    this.setState({count: this.state.count +1});
  }

  hundleMinusButton = () =>{
    this.setState({count: this.state.count -1});
  }

  render(){
    return (
    //コンポーネントでreturnする際は、一つのタグにする必要があるため
    <React.Fragment>
      <div>count: {this.state.count}</div>
      <button onClick={this.hundlePlusButton}>+1</button>
      <button onClick={this.hundleMinusButton}>-1</button>
    </React.Fragment>
    )
  }
}



export default App;
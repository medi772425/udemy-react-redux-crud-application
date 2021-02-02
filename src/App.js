import React from 'react';

//クラスコンポーネント
// class App extends Component{
//   render(){
//     return(
//     <React.Fragment>
//       <input type="text" onClick={() => console.log("aaa")}/>
//       <input type="text" onClick={() => console.log("bbb")}/>
//     </React.Fragment>
//     );
//   }
// }

//関数コンポーネント
const App = () =>{
  return <div>Hi!<Cat /></div>
}

const Cat = () => {
  return "にゃー";
}


export default App;
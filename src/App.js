import React, { Component } from 'react';



class App extends Component{
  render(){
    return(
    <React.Fragment>
      <input type="text" onClick={() => console.log("aaa")}/>
      <input type="text" onClick={() => console.log("bbb")}/>
    </React.Fragment>
    );
  }
}

export default App;
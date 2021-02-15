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
  const profiles = [
    {name:"taro", age:10},
    {name:"Hanako", age:5},
    {name:"noname"}
  ]

  return <div>
         {
             profiles.map((profile, index) => {
              return <User name={profile.name} age={profile.age} key={index} />
            })
         }
         </div>
}

const User = (props) => {
  return props.name + props.age;
}

User.defaultProps = {
  age: 1
}


export default App;
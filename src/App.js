import React from 'react';
import PropTypes from 'prop-types';

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
    {name:"noname", age:"a"}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}


export default App;
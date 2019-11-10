import React from 'react';
// import logo from './logo.svg';
import './App.css';
import json from './emoji.json';
import Header  from './header';
import Input  from './input';
import typeemo  from './input';
// import Emoji  from './emoji';
// import Result  from './result';


function App() {
  return (
    <div><Header/>
    <Input />
    {/* console.log(jsondata) */}
    <typeemo/>
    {/* <Emoji/> */}
     {/* <Result/>  */}
    </div>
      
  );
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   
  state ={
    passWord: ''

  }
  render(){
    return(
      <div>
        <div>
        <input id="pass" type="text" />Enter Password
        </div>
        <div>
        <input type="text"  />Value
        </div>
        <button type="Submit">  Submit</button>
      </div>

    )


  }
  

     
  
}

export default App;

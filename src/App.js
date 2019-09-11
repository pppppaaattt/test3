import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   
  state ={
    passWord: ''

  }
  render(){
    return(
    <form>
      <div>
        <div>
        <input id="pass" type="text" />Enter Password
        </div>
        <div>
        <input type="text"  />Value
        </div>
        <button type="Submit">  Submit</button>
      </div>
      <div>
        <input type="text" onChange={this.parehas}/>Confirm
      </div>
      <div>
        <button onClick={this.comparing}>Compare</button>
      </div>
    </form>
      
    )


  }
  

     
  
}

export default App;

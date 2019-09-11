import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   
  

  state = {
    passWord:'',
    comparePassWord: ''
  }


  getName = (e)=>{
    this.setState({
      passWord:e.target.value}) 
  }

  getCompared = (e)=> {
    this.setState({
      comparePassWord:e.target.value})
  }

  comparing=(e)=>{
    e.preventDefault();
    if(this.state.passWord === this.state.comparePassWord){

      alert("parehas")
    }
    else{
      e.preventDefault();
      alert("diparehas")
    }
  }

  render(){
    return(
    <form>
      <div>
        <div>
        <input id="pass" type="text" value={this.state.name} onChange={this.getName}/>Enter Password
        </div>
        <div>
        <input type="text" value={this.state.compared} onChange={this.getCompared}/>Compare Password
        </div> 
        <div>
        <button onClick={this.comparing}>Compare</button>
      </div>
      </div>
    </form>
      
    )


  }
  

     
  
}

export default App;

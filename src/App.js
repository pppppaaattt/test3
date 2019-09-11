import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
   
  

  state = {
    passWord:'',
    comparePassWord: '',
    title: 'Welcome to SXI'
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

    if((this.state.passWord==='') && (this.state.comparePassWord==='')){
      alert("Error: Please input password to both fields to compare")
    }
    else if(this.state.passWord === this.state.comparePassWord){

      alert("Success: The password is the same")
    }
    else {
      alert("Error: The password is not the same")
    }

  }

  render(){
    return(
  
    <form className="bgForm">
      <div className="itemsInside">
        <div>
        <h1>{this.state.title}</h1>
        </div>
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

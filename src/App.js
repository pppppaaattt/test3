import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import  { Redirect } from 'react-router-dom'

class App extends React.Component {
   
  

  state = {
    passWord:'',
    comparePassWord: '',
    title: 'Welcome to SXI',
    Redirect:false
  }
  


  getName = (e)=>{
    this.setState({
      passWord:e.target.value})  
  }

  getCompared = (e)=> {
    this.setState({
      comparePassWord:e.target.value})
  }

  changePage = (e)=>{
    e.preventDefault();
    if(this.state.Redirect){
      return <Login/>
    }
  }
  setRedirect =(e)=>{
    e.preventDefault();
    this.setState({
      Redirect:true
    })

  }

  testingRedirect=(e)=>{
    e.preventDefault();
    

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
          <button onClick={this.testingRedirect}>Compare</button>
          </div>
          
      </div>
    </form>

    )


  }
  

     
  
}


export default App;

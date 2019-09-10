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
    error: ''
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
      this.setState({
        error:'Error: Please input password to both fields to compare'})
    }
    else if(this.state.passWord === this.state.comparePassWord){

      this.setState({
        error: 'Success: The password is the same'})
       
      
    }
    else {
      this.setState({
        error: 'Error: The password is not the same'})
    }

  }

  

  render(){

    


    return(
  
    <form className="bgForm">
      <div className="itemsInside">
        <div>
        < p className="titleDes">{this.state.title}</p>
       
        </div>
        <div className="middleDes">
          <div>
          <input className="inputPass" type="text" value={this.state.name} onChange={this.getName} placeholder="Enter Password"/> 
          </div>

          <div>
          <input className="inputComPass" type="text" value={this.state.compared} onChange={this.getCompared} placeholder="Compare Password"/> 
          </div> 
        </div>
          <div  className="btnDes">
          <button className="btnbtn" onClick={this.comparing}>Enter</button>
          </div>
      </div>
      <div>
          <p className="errorStyle">{this.state.error}</p>
          </div>
    </form>

    )


  }
  

     
  
}


export default App;

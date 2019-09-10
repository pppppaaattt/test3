import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


  state = {
    name:'',
    compared: ''
  }


  handleChange = (e)=>{

    this.setState({name:e.target.value})
    
  }

  parehas = (e)=> {
    this.setState({
      compared:e.target.value
    })
  }
  comparing=(e)=>{
    e.preventDefault();
    if(this.state.name === this.state.compared){

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
        <input type="text" onChange={this.handleChange}/>Enter Email
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

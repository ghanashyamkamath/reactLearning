import React, { Component } from 'react';  
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// useState-react hook for states

// const App = (props) =>{

class App extends Component { 
  // in above we are going to create a function component
  //class state default way 
  state = {
    persons: [
      {name :'Ghanashyam' , age : 22},
      { name: 'Kiran', age: 23 },
      { name: 'Vishnu', age: 23 }

    ]
  };

  //changing state on button click
  switchNameHandler = () =>{
    // console.log("Was clicked");
    //DONT DO THIS this.state.persons[0].name = "abcd"
    this.setState({
      persons: [
      { name: 'Abcd', age: 24 },
      { name: 'efgh', age: 25 },
      { name: 'ijkl', age: 29 }

       ]
      })
  }
  
  
  render() { 
    // in funcion component no render
    return (
      <div className="App">
        <h1>Welcome Ghanashyam</h1>
        <p>This is working!!!!!!!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name="Shiva" age="28"> My Hobbies is riding</Person>
      </div>
    );
  }
}

export default App;

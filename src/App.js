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

    ],
    showPersons:false
  };

  //changing state on button click
  switchNameHandler = (newName) =>{
    // console.log("Was clicked");
    //DONT DO THIS this.state.persons[0].name = "abcd"
    this.setState({
      persons: [
      { name: newName, age: 24 },//newName gets from bind function
      { name: 'efgh', age: 25 },
      { name: 'ijkl', age: 29 }

       ]
      })
  }


  nameChangedhandler = (event) =>{

    this.setState({
      persons: [
        { name: 'Ghanashyam', age: 24 },//newName gets from bind function
        { name: 'Kiran', age: 25 },
        { name: event.target.value, age: 29 }

      ]
    })
  }
  //toggle persons on click
  togglePersonHandler = ()=>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
  
  
  render() { 
    // in funcion component no render

    //inline styling
    const style ={
      backgroundColor:'green',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    };

    return (
      <div className="App">
        <h1>Welcome Ghanashyam</h1>
        <p>This is working!!!!!!!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>

        {/* toggling */}
        {
          this.state.showPersons === true ?
        <div>
        
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={() => this.switchNameHandler('Kamath')}
        //we can pass methods as props to another file
        />

        <Person 
        name={this.state.persons[2].name}
         age={this.state.persons[2].age}
         changed={this.nameChangedhandler}/>
         
        <Person name="Shiva" age="28"> My Hobbies is riding</Person>
        
        </div>:null
        }
        
      </div>
    );
  }
}

export default App;

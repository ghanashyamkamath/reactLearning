import React, { Component } from 'react';  
// import React, { useState } from 'react';
// import Radium from 'radium';
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
  // switchNameHandler = (newName) =>{
  //   console.log("Was clicked");
  //   DONT DO THIS this.state.persons[0].name = "abcd"
  //   this.setState({
  //     persons: [
  //     { name: newName, age: 24 },newName gets from bind function
  //     { name: 'efgh', age: 25 },
  //     { name: 'ijkl', age: 29 }

  //      ]
  //     })
  // }
  deletePersonhandler = (personIndex) =>{
    //const persons = this.state.persons.slice();//bad practice.so create a copy using slice() 
    //alternative is spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }


  nameChangedhandler = (event,id) =>{
    const personIndex =this.state.persons.findIndex( (p) => {
      return p.id === id;

    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]= person;


    this.setState({ persons:persons })
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
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      // ':hover':{
      //   backgroundColor:'lightgreen',
      //   color:'black'
      // }

    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (

        // representing as a list 
        <div>
          {this.state.persons.map( (person,index)=>{
            return <Person click={ () => this.deletePersonhandler(index) } 
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) => this.state.nameChangedhandler(event, person.id)}/>
          } )}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />

          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler('Kamath')}
          //we can pass methods as props to another file
          />

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedhandler} />

          <Person name="Shiva" age="28"> My Hobbies is riding</Person> */}

        </div>

      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor:'lightred',
      //   color:'black'
      // }

    }
    let classes=[];
    if(this.state.persons.length <= 2){
      classes.push('red');//classes['red]
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');//classes['red','bold']
    }


    return (
      
      <div className="App">
        <h1>Welcome Ghanashyam</h1>
        <p className = {classes.join(' ')}>This is working!!!!!!!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>

        {/* another way toggling */}
        
        
        {persons}
        
        
      </div>
      
    );
  }
}

export default App;

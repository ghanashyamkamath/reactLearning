import React from 'react';

import './Person.css';




const person = (props) =>{

    //media queries
    // const style ={
    //     '@media (min-width : 500px)': {
    //         width :'450px'
    //     }
    // };
    


    return(
        <div className="Person"> 
        <p onClick={props.click}>I am {props.name} and my age is {props.age} years old.</p> 
         {/* dynamic content  */}

        <p>{props.children}</p>
        {/* accessing children  */}
        <input type="text" onChange={props.changed} value={props.name}/>  
        {/* two way binding */}
        </div>
    );
};
export default person; 
import React from 'react'

const person = (props) =>{
    return(
        <div>
        <p>I am {props.name} and my age is {props.age} years old.</p> 
         {/* dynamic content  */}

        <p>{props.children}</p>
        {/* accessing children  */}
        </div>
    );
};
export default person; 
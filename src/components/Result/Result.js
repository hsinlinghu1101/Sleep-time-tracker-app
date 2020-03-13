import React from 'react'



export default function Result(props){
    
   
        return(
            <section>      
              <h2>'{props.date}' - You got '{props.hours}' hours of sleep </h2>
              <p>{props.message}</p>
              <button>Edit</button>
              <button>Delete</button>
            </section>
           
          
        )
    
}
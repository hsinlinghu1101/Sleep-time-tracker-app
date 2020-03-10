import React from 'react'
import NavBar from '../NavBar/NavBar'

export default class Result extends React.Component{
    render(){
        return(
            <main role="main">
            <header role="banner">
              <NavBar/>  
              <h1>Daily Sleep Hours</h1>
            </header>
            <section>
              
              <h2>'2/20/2020' - '8' hours of sleep</h2>
              <p>message: Great! You had enough sleep!</p>
              
              <button>Edit</button>
              <button>Delete</button>
            </section>
           
          </main> 
        )
    }
}
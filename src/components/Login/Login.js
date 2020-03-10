import React from 'react'
import { Link } from 'react-router-dom'


export default class Login extends React.Component{

    state= {
      name :'',
      password:''
    }
    render(){
        return(
            <main role="main">
            <header>
                <h3>Return User</h3>
            </header>
            <form className='login-form'>
                <div>
                  <label htmlFor="name">Name</label>
                  <input placeholder='Name' type="text" name='name' id='name' value={this.state.name} required />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' id='password' placeholder="password" value={this.state.password} required/>
                </div>
                <button type='submit'>Log In</button>
                <Link to='/'>Cancel</Link>
            </form>
           </main>
            )
    }
       
    
}
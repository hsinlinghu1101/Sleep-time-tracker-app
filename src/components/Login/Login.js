import React from 'react'
import { Link } from 'react-router-dom'
import config from '../Login/Login'


export default class Login extends React.Component{

    state= {
      name :'',
      password:''
    }

    insertName=(name)=>{
      this.setState({
        name: this.state.name
      })
    }

    insertPassword=(password)=>{
      this.setState({
        password: this.state.password
      })
    }

    handleSubmit(e){
      e.preventDefault();

      const name= this.state.name;
      const password= this.state.password;
      
      const data={
          name,
          password,  
      }

      fetch(`${config.API_ENDPOINT}`)

    }


    render(){
        return(
            <main role="main">
            <header>
                <h3>Return User</h3>
            </header>
            <form className='login-form' onSubmit={e=>this.handleSubmit(e)}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input placeholder='Name' type="text" name='name' id='name' onChnage={e =>this.insertName(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' id='password' placeholder="password" onChnage={e =>this.insertPassword(e.target.value)} required/>
                </div>
                <button type='submit'>Log In</button>
                <Link to='/'>Cancel</Link>
            </form>
           </main>
            )
    }
       
    
}
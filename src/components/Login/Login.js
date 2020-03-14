import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'


export default class Login extends React.Component{

   static defaultProps={
     onLoginSuccess:()=>{}
   }

   state={
     error:null,
     name:''
   }

  /*sendName=(event)=>{
    this.setState({
      name:event.target.name.value
    })
  }*/

   sendName=(name)=>{
    this.setState({
      name
    })
      name = this.props.getName
    }

    handleSubmit=(e)=>{
      e.preventDefault();
    this.setState({error:null})
    
     const{ user_name, password}=e.target

    
    AuthApiService.postLogin({
      user_name:user_name.value, 
      password:password.value
    })
   
    .then(data =>{
      console.log(data)
      TokenService.saveAuthToken(data.authToken)
     user_name.value=''
     password.value=''
     this.props.onLoginSuccess(data.user_id)
    })
    .catch(res =>{
      this.setState({
          error:res.error
      })
  })

    }

    
    render(){
      const { error, name }= this.state
        return(
            <main role="main">
            <header>
                <h3>Return User</h3>
            </header>
            <form className='login-form' onSubmit={e=>this.handleSubmit(e)}>
            {error && <p className='red'>{error}</p>}
                <div>
                  <label htmlFor="name">Name</label>
                  <input placeholder='Name' type="text" name='user_name' id='name' value={name} onChange={(e)=>this.sendName(e.target.value)} required />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' id='password' placeholder="password"  required/>
                </div>
                <button type='submit'>Log In</button>
                <Link to='/'>Cancel</Link>
            </form>
           </main>
            )
    }
       
    
}
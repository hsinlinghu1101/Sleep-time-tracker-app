import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service'
import AuthApiService from '../../Services/auth-api-service'
import './Login.css'


export default class Login extends React.Component{

   static defaultProps={
     onLoginSuccess:()=>{}
   }

   state={
     error:null,
     user_name:''
   }

   NameChange=(e)=>{
    this.props.onUserNameChange(e.target.value)
    this.setState({
      user_name:e.target.value
    })
  }

   
    handleSubmit=(e)=>{
      e.preventDefault();
    this.setState({error:null})
    
     const{ user_name, password}=e.target
     
    this.props.onUserNameChange(this.state.user_name)
    AuthApiService.postLogin({
      user_name:user_name.value, 
      password:password.value
    })
   
    .then(data =>{
    // The JWT handler only stores the token if the request is successful
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
      const { error }= this.state
        return(
            <main role="main">
            <header>
                <h3>Login Your Account</h3>
            </header>
            <form className='login-form' onSubmit={e=>this.handleSubmit(e)}>
            {error && <p className='red'>{error}</p>}
                <div>
                  <label htmlFor="name">User Name: </label>
                  <input placeholder='Name' type="text" name='user_name' id='name' value={this.state.user_name} onChange={this.NameChange} required />
                </div>
                <div>
                  <label htmlFor="password">Password: </label>
                  <input type="password" name='password' id='password' placeholder="password"  required/>
                </div>
                <button className='btn login' type='submit'>Login</button>
                <div className='btn'><Link to='/'>Cancel</Link></div>
            </form>
           </main>
            )
    }
       
    
}
import React from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../Services/auth-api-service'


export default class Register extends React.Component{
    static defaultProps ={
        onRegisterationSuccess:() => {}
    }

    state= { error: null }


    handleNewUser=(event)=>{
        event.preventDefault();
        
        const { user_name, user_age, password} = event.target
        
        this.setState({ error:null })
        AuthApiService.postUser({
            user_name: user_name.value,
            user_age: Number(user_age.value),
            password: password.value
        })
       
        .then(user =>{
            user_name.value =''
            user_age.value=''
            password.value=''
            this.props.onRegisterationSuccess()
        })
        .catch(res =>{
            this.setState({
                error:res.error
            })
        })
    }

    render(){
        const { error } = this.state
        return(
            <main role="main">
      
            <header>
                <h3>New User</h3>
            </header>
            <form className='signup-form' onSubmit={this.handleNewUser}>
            {error && <p>{error}</p>}
                <div>   
                  <label htmlFor="name">User Name</label>
                  <input placeholder='Name' type="text" name='user_name' id='name' required/>
                </div>
                <div>
                  <label htmlFor="age">Age</label>
                  <select name='user_age' id='age'  required>
                    <option>find your age</option>
                    <option value='1'>14-17 year old</option>
                    <option value='2'>18-64 years</option>
                    <option value='3'>above 65 years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name='user_password' id='password' placeholder="password"  required/>
                </div>
                
                <button type='submit'>Sign Up</button>
                <Link to='/'>Cancel</Link>
            </form>
            </main>
            )
    }
       
    
}
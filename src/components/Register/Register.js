import React from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../Services/auth-api-service'


export default class Register extends React.Component{
    static defaultProps ={
        onRegisterationSuccess:() => {}
    }

    state= { 
        error: null, 
    }


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
      
                <h3>Create an Account</h3>
            
            <form className='signup-form' onSubmit={this.handleNewUser}>
            {error && <p>{error}</p>}
                <div>   
                  <label htmlFor="name">User Name: </label>
                  <input placeholder='Name' type="text" name='user_name' id='name' required/><br></br>
                  <label htmlFor="age">Age: </label>
                  <select name='user_age' id='age'  required>
                    <option id='age'>find your age</option>
                    <option id='age' value='1'>14-17 year old</option>
                    <option id='age' value='2'>18-64 years</option>
                    <option id='age' value='3'>above 65 years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="password">Password: </label>
                  <input type="password" name='password' id='password' placeholder="password"  required/>
                  <p className='des'>(Password must have at least 9 characters and contain 1 upper case, lower case, number and special character)</p>
                </div>
                
                <button className='btn register' type='submit'>Sign Up</button>
                <div className='btn'><Link to='/'>Cancel</Link></div>
            </form>
            <div className='end'></div>
            </main>
            )
    }
       
    
}
import React from 'react'
import config from '../../config'
import { Link } from 'react-router-dom'


export default class Register extends React.Component{
    state={   
      name:'',
      age:'',
      password:'',
      conPassword:''
    }
    

    addUserName=(name) => {
      this.setState={
          name,
      }
    }

    addUserAge=(age)=>{
        this.setState={
            age,
        }
    }

    addUserPassword=(password)=>{
        this.setState={
            password,
        }
    }

    addUserConPassword=(conPassword)=>{
        this.setState={
            conPassword,
        }
    }

    handleNewUser(event){
        event.preventDefault();
        
        const name= this.state.name;
        const age =this.state.age;
        const password= this.state.password;
        const conPassword= this.state.conPassword

        const data={
            name,
            age,
            password,
            conPassword
        }

        fetch(`${config.API_ENDPOINT}/api/user/:user_id`, {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>
            (!res.ok)
            ? res.json().then(e=>Promise.reject(e))
            :res.json()
            )
        }

    render(){
        return(
            <main role="main">
      
            <header>
                <h3>New User</h3>
            </header>
            <form className='signup-form' onSubmit={this.handleNewUser}>
                <div>
                  <label htmlFor="name">User Name</label>
                  <input placeholder='Name' type="text" name='name' id='name' onChange={e=> this.addUserName(e.target.value)} required/>
                </div>
                <div>
                  <label htmlFor="age">Age</label>
                  <select name='age' id='age' onChange={e=> this.addUserAge(e.target.value)} required>
                    <option>find your age</option>
                    <option value='1'>14-17 year old</option>
                    <option value='2'>18-64 years</option>
                    <option value='3'>above 65 years</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' id='password' placeholder="password" onChange={e=> this.addUserPassword(e.target.value)} required/>
                </div>
                
                <button type='submit'>Sign Up</button>
                <Link to='/'>Cancel</Link>
            </form>
            </main>
            )
    }
       
    
}
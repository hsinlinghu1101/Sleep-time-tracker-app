import React from 'react'
import Login from './Login';

export default class LoginPage extends React.Component{
    static defaultProps={
      //  location:{},
        history:{
            push:()=>{}
        }
    }


handleLoginSuccess=(user_id)=>{
    const { history }= this.props
   // const destination = (location.state || {}).from || '/'
    history.push(`/user/${user_id}`)
}

render(){
    return(
        <div>
        <h2>Login</h2>
        <Login onLoginSuccess={this.handleLoginSuccess}/>
        </div>
    )
}
}
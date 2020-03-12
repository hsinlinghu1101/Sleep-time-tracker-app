import React from 'react'
import Login from './Login';

export default class LoginPage extends React.Component{
    static defaultProps={
      //  location:{},
        history:{
            push:()=>{}
        }
    }


handleLoginSuccess=()=>{
    const { history }= this.props
   // const destination = (location.state || {}).from || '/'
    history.push(`/user`)
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
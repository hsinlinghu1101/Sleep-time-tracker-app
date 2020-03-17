import React from 'react'
import Login from './Login';

export default class LoginPage extends React.Component{
    static defaultProps={
      
        history:{
            push:()=>{}
        }
    }


handleLoginSuccess=(user_id)=>{
    const { history }= this.props
    history.push(`/user/${user_id}`)
}

render(){
    return(
        <Login  onUserNameChange={this.props.onUserNameChange} onLoginSuccess={this.handleLoginSuccess}/>
        
    )
}
}
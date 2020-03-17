import React from 'react'
import Register from './Register'
import './Register.css' 
export default class RegistrationPage extends React.Component {
    static defaultProps={
        history:{
            push:()=>{}
        }
    }

    handleRegistration=(user)=>{
        const {history} = this.props
        history.push('/login')
    }
    render(){
        return(
            <div>
                <Register onRegisterationSuccess={this.handleRegistration}/>
            </div>
        )
    }

}
import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service';
export default class NavBar extends React.Component{
    

     handleLogout = () =>{
       TokenService.clearAuthToken();
    }

    render(){
    
    return (     
        <nav role="navigation">        
            <Link onClick={this.handleLogout}to='/'> Logout </Link>
        </nav>

      
     )
    }
}
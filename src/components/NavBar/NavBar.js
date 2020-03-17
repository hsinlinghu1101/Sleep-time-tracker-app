import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../Services/token-service';
import './NavBar.css'
export default class NavBar extends React.Component{
    

     handleLogout = () =>{
       TokenService.clearAuthToken();
    }

    render(){
    
    return (     
        <nav role="navigation"> 
            <div className="nav">Hi, {this.props.name}
              <div className="logout"><Link onClick={this.handleLogout}to='/'> Logout </Link></div>
            </div>      
        </nav>

      
     )
    }
}
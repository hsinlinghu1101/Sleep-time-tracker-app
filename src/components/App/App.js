import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import LoginPage from '../Login/LoginPage'
import RegisterationPage from '../Register/RegisterationPage'
import HomePage from '../Home/HomePage'
import ResultPage from '../Result/ResultPage'
import NotFound from '../NotFound/NotFound'

import './App.css';

export default class App extends React.Component{
 
state={
  name:''
}

setName=(name)=>{
  this.setState({
    name
  })
}
 
  render(){
    
  return (
    <div className="App">
     <Header />
     <Switch>
     <Route exact path='/' component={Landing}/>
     <Route path='/login' render={()=><LoginPage getName={this.setName}/>}/>
     <Route path='/register' component={RegisterationPage}/>
     <Route path='/user/:user_id' component={HomePage}/>
     <Route path='/data/:user_id' component={ResultPage}/>
     <Route component={NotFound}/>
     </Switch>
     <Footer/>
    </div>
  );
}
}



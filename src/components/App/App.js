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
  user_name:localStorage.user_name || ''
};

onUserNameChange=(name)=>{
  localStorage.user_name=name
  this.setState({
    user_name:name
  })
};
 
  render(){
    
  return (
    <div className="App">
     
     <Header />
     <Switch>
     <Route exact path='/' component={Landing}/>
     <Route path='/login' render={(props)=><LoginPage onUserNameChange={this.onUserNameChange} {...props}/>}/>
     <Route path='/register' component={RegisterationPage}/>
     <Route path='/user/:user_id' render={(routerProps)=><HomePage match={routerProps.match} history={routerProps.history} name={this.state.user_name}/>}/>
     <Route path='/data/:user_id'render={(routerProps)=><ResultPage match={routerProps.match} history={routerProps.history} name={this.state.user_name}/>}/>
     <Route component={NotFound}/>
     </Switch>
     <Footer/>
    </div>
  );
}
};



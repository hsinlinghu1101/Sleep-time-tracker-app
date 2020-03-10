import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Result from '../Result/Result'
import NotFound from '../NotFound/NotFound'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <Switch>
     <Route exact path='/' component={Landing}/>
     <Route path='/login' component={Login}/>
     <Route path='/register' component={Register}/>
     <Route path='/home/:user_id' component={Home}/>
     <Route path='/result/:user_id' component={Result}/>
     <Route component={NotFound}/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;

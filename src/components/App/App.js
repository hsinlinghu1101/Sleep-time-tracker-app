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
    user_name:'',
    date:'',
    hours:'',
    message:'',
    data:[]
  }

  setName=(name)=>{
    this.setName({
      user_name:this.state.name
    })
  }

  setDate=(date)=>{
    this.setDate({
      date:this.state.date
    })
  }

  setHours=(bed, wakeup)=>{

    this.setHours({
      hours:this.state.hours
    })
  }

 

  setMessage

 
  render(){
    const {user_name, date}= this.state
  return (
    <div className="App">
     <Header />
     <Switch>
     <Route exact path='/' component={Landing}/>
     <Route path='/login' component={LoginPage}/>
     <Route path='/register' component={RegisterationPage}/>
     <Route path='/user/:user_id' render= {() => 
      <HomePage name={user_name}/>}/>
     <Route path='/data/:user_id' render= {() => 
     <ResultPage name={user_name} date={date} />
     }/>
     <Route component={NotFound}/>
     </Switch>
     <Footer/>
    </div>
  );
}
}



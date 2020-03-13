import React from 'react';
import Result from './Result';
import NavBar from '../NavBar/NavBar'
import { format } from 'date-fns';
import DataAPiService from '../../Services/data-api-service';


export default class ResultPage extends React.Component {
   
state={
    userData:[]
}

    componentDidMount() {
        
        DataAPiService.getData()
         .then(userData=> this.setState({
            userData
         }))  
    }

    render() {
        
        const {userData} = this.state
        return (
            <main role="main">
                <header role="banner">
                    <NavBar />
                    <h1>Daily Sleep Hours</h1>

                </header>
                {userData.map(data => {
                    let hours = (new Date(data.wakeup_time) - new Date(data.bed_time))/1000/60/60
                    let message 
                    if (hours < 7){
                        message=' need more sleep'
                    }else{
                        if(hours>10){
                            message='need less sleep'
                        }else{
                            message='enough sleep'
                        }
                    }
                    return( 
                    <Result date={format(data.data_created, 'Do MMM YYYY')} 
                     hours={hours} message={message}/>
                )})}

            </main>
        )
    }
}

import React from 'react';
import { Link } from 'react-router-dom'
import Result from './Result';
import NavBar from '../NavBar/NavBar'
import { format } from 'date-fns';
import DataAPiService from '../../Services/data-api-service';
import './Result.css'

export default class ResultPage extends React.Component {
 static defaultProps={
     match:{
         params:{}
     },
     history:{
        push:()=>{}
    }
 }  
 
state={
    userData:[]
}

    componentDidMount() {
        
    DataAPiService.getData()
         .then(userData=> this.setState({
            userData
         }))  
    }

    handleDeleteData =(dataId)=>{
        DataAPiService.getData()
        .then(userData=> this.setState({
           userData
        }))  
   
       console.log('hi') 
    }

   



    render() {
          
        const {userData} = this.state
                
        return (
            <main role="main">
               
               <NavBar name={this.props.name}/>
               <h2>Daily Sleep Hours</h2>
               <Link to='/user/my'>+ Create Record</Link>
               
                {userData.map(data => {
                    
                    let hours = (new Date(data.wakeup_time) - new Date(data.bed_time))/1000/60/60
                    let message;
                    let age;
                    
                    if(age === 1) {
                        if(hours < 8){
                            message='Oh-Ah! You cannot think well, love well, dined well, if you has not sleep well. '
                        }else if (hours >=8 && hours <=10){
                            message='Awesome! You had enough sleep!'
                        }else{
                            message="Life is something that happens when you aren't sleeping"
                        }
                    }else if(age === 2 ){
                        if(hours < 7){
                            message=' Oh-Ah! You need more sleep!  '
                        }else if (hours >=7 && hours <=9){
                            message='Awesome! You had enough sleep'
                        }else{
                            message="Life is something that happens when you aren't sleeping"
                        }
                    }else{
                        if(hours < 7){
                            message=' Oh-Ah! You need more sleep!  '
                        }else if (hours >=7 && hours <=8){
                            message='Awesome! You had enough sleep'
                        }else{
                            message="Life is something that happens when you aren't sleeping"
                        }
                    }
                    return( 
                    <Result 
                    key={data.id} 
                    id={data.id} 
                    date={format(data.data_created, 'Do MMM YYYY')} 
                    hours={hours} 
                    message={message}
                    onDeleteData={this.handleDeleteData} />
                )})}

            </main>
        )
    }
}

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
                            message='Uh-oh! You cannot think Well, eat Well and play Well, if you did not sleep Well! '
                        }else if (hours >=8 && hours <=10){
                            message='Awesome! You had enough sleep!'
                        }else{
                            message="If you want your dreams to come true, don't oversleep next time!"
                        }
                    }else if(age === 2 ){
                        if(hours < 7){
                            message='Uh-oh! You cannot think Well, eat Well and play Well, if you did not sleep Well!  '
                        }else if (hours >=7 && hours <=9){
                            message='Awesome! You had enough sleep!'
                        }else{
                            message="If you want your dreams to come true, don't oversleep next time!"
                        }
                    }else{
                        if(hours < 7){
                            message=' Uh-oh! You cannot think Well, eat Well and play Well, if you did not sleep Well!  '
                        }else if (hours >=7 && hours <=8){
                            message='Awesome! You had enough sleep!'
                        }else{
                            message="If you want your dreams to come true, don't oversleep next time!"
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

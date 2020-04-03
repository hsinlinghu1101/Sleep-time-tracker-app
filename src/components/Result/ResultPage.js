import React from 'react';
import { Link } from 'react-router-dom'
import Result from './Result';
import NavBar from '../NavBar/NavBar'
import DataApiService from '../../Services/data-api-service';
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
    userData:[],
    error:null
}

    componentDidMount() {
        
    DataApiService.getData()
         .then(userData=> this.setState({
            userData
         })) 
      .catch(res=> this.setState({
            error:JSON.stringify(res.error)
          }))
    }

    handleDeleteData =(dataId)=>{
        DataApiService.getData()
        .then(userData=> this.setState({
           userData
        }))

    }

   

    render() {
          
        const {userData} = this.state
                
        return (
            <main role="main">
            <div className='top'>   
               <NavBar name={this.props.name}/>
               <h2 id='daily'>Daily Sleep Hours</h2>
               <Link to='/user/my'>+ Add Record</Link>
               
            </div>  
            
                {userData.map(data => {
                    //calculate user's total sleep hours and make sure only one number of digits to appear after the decimal point.
                    let hours = ((new Date(data.wakeup_time) - new Date(data.bed_time))/1000/60/60).toFixed(1)
                    let messageA;
                    let messageB;
                    let messageC;
                    let age;
                    
                    
                    if(age === 1) {
                        if(hours < 8 && hours > 0){
                            messageA='Uh-oh! You cannot think Well, eat Well and play Well, if you did not sleep Well! '
                        }else if (hours >=8 && hours <=10){
                            messageB='Awesome!You had enough sleep! Keep it up!'
                        }else if (hours > 10 && hours <= 24){
                            messageC="If you want your dreams to come true, don't oversleep next time!"
                        }
                    }else if(age === 2 ){
                        if(hours < 7 && hours > 0){
                            messageA='Uh-oh! You cannot think Well, eat Well and play Well, if you did not sleep Well!  '
                        }else if (hours >=7 && hours <=9){
                            messageB='Awesome! You had enough sleep! Keep it up!'
                        }else if (hours > 9 && hours <= 24){
                            messageC="If you want your dreams to come true, don't oversleep next time!"
                        }
                    }else{
                        if(hours < 7 && hours > 0){
                            messageA=' Uh-oh! You cannot think Well, eat Well and play Well, if you did not sleep Well!  '
                        }else if (hours >=7 && hours <=8){
                            messageB='Awesome! You had enough sleep!  Keep it up!'
                        }else if (hours > 8 && hours <= 24){
                            messageC="If you want your dreams to come true, don't oversleep next time!"
                        }
                    }
                    const date = new Date(data.data_created) 
                    return( 

                    <Result 
                    key={data.id} 
                    id={data.id} 
                    date={date.toLocaleDateString('en-US', {timeZone: 'UTC'})} 
                    hours={hours.toLocaleString()} 
                    messageA={messageA} 
                    messageB ={messageB} 
                    messageC ={messageC}
                    onDeleteData={this.handleDeleteData} />
                )})}
               <div className='end'></div>
            </main>
        )
    }
}

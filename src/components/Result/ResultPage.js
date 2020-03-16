import React from 'react';
import Result from './Result';
import NavBar from '../NavBar/NavBar'
import { format } from 'date-fns';
import DataAPiService from '../../Services/data-api-service';


export default class ResultPage extends React.Component {
 static defaultProps={
     match:{
         params:{}
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
        this.props.history.push(`/`)
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
                    let message;
                    let age;
                    console.log(data)
                    if(age === 1) {
                        if(hours < 8){
                            message=' You need more sleep ! '
                        }else if (hours >=8 && hours <=10){
                            message='You had enough sleep'
                        }else{
                            message='You sleep too much'
                        }
                    }else if(age === 2 ){
                        if(hours < 7){
                            message=' You need more sleep ! '
                        }else if (hours >=7 && hours <=9){
                            message='You had enough sleep'
                        }else{
                            message='You sleep too much'
                        }
                    }else{
                        if(hours < 7){
                            message=' You need more sleep ! '
                        }else if (hours >=7 && hours <=8){
                            message='You had enough sleep'
                        }else{
                            message='You sleep too much'
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

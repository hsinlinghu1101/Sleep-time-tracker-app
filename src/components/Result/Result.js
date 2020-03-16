import React from 'react'
import DataAPiService from '../../Services/data-api-service';


export default class Result extends React.Component{
   static defaultProps={
      onDeleteData:()=>{}
   }
   state={
     error:null
   }
  
  handleClickDelete=(event)=>{
    console.log('hello')
     event.preventDefault();
   let dataId =this.props.id

   DataAPiService.deleteData(dataId)
    .then(()=>{
      this.props.onDeleteData(dataId) 
    })
    
    .catch(res=> this.setState({
      error:JSON.stringify(res.error)
    }))
    
   }
        
  
  render(){

  return(
      <section>      
        <h2>'{this.props.date}' - You got '{this.props.hours}' hours of sleep </h2>
  
       <p>{this.props.message}</p>
        <button>Edit</button>
        <button onClick={this.handleClickDelete}>Remove</button>
      </section>
           
          
        )
  }  
}
import React from 'react'
import DataAPiService from '../../Services/data-api-service';


export default class Result extends React.Component{
   static defaultProps={
      onDeleteData:()=>{}
   }
   state={
     error:null,
     confirm: false
   }
  
   handleConfirm=()=>{
     this.setState({
       confirm: true
     })
   }

   handleCancel=()=>{
    this.setState({
      confirm: false
    })
   }
  handleClickDelete=(event)=>{
    
     event.preventDefault();
   let dataId =this.props.id

   DataAPiService.deleteData(dataId)
    .then(()=>{
      console.log('hello')
      this.props.onDeleteData(dataId) 
    })
    .then(this.render())
    .catch(res=> this.setState({
      error:JSON.stringify(res.error)
    }))
    
    
   }
        
  
  render(){
   
  return(
      <section>      
        <h2>'{this.props.date}'  {this.props.hours} hours of sleep </h2>
  
       <p className='message'>{this.props.message}</p>
        
        {
          this.state.confirm? 
          (<div><button className='btn data' onClick={this.handleClickDelete}>Are you sure</button>
           <button className='btn data' onClick={this.handleCancel}>Cancel</button></div>)
             : 
           (<button className='btn data' onClick={this.handleConfirm}>Remove</button>)
        }
       
      </section>
           
          
        )
  }  
}
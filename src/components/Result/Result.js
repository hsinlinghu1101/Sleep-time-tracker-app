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
      this.props.onDeleteData(dataId) 
    })
    .then(this.render())
    .catch(res=> this.setState({
      error:JSON.stringify(res.error)
    }))
    
    
   }
        
  
  render(){
   
  return(
      <section className='data'>  
      <div className='dateTime'>    
        <h2>{this.props.date}</h2>  
        <h2>{this.props.hours} hours of sleep </h2>
      </div>
  
       <p className='mesA font'>{this.props.messageA}</p>
        <p className='mesB font'>{this.props.messageB}</p>
        <p className='mesC font'>{this.props.messageC}</p>
        {
          this.state.confirm? 
          (<div><button className='btn data' onClick={this.handleClickDelete}>Are you sure ?</button>
           <button className='btn data' onClick={this.handleCancel}>Cancel</button></div>)
             : 
           (<button className='btn data' onClick={this.handleConfirm}>Remove</button>)
        }
       
      </section>
           
          
        )
  }  
}
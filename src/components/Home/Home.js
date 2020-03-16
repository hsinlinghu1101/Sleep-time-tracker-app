import React from 'react'
import DataAPiService from '../../Services/data-api-service';
import NavBar from '../NavBar/NavBar'


export default class Home extends React.Component{
  
  static defaultProps={
    createDataSuccess:()=>{},
    
  }

  state={
    error:null,
    data_wakeup:''
  }

 
  
  handleRecordSubmit=(event)=>{
    event.preventDefault();
    const{data_created, bed_time, wakeup_time, data_wakeup }=event.target
    

    DataAPiService.postData({
      data_created: data_created.value,
      bed_time: bed_time.value, 
      wakeup_time: wakeup_time.value,
      data_wakeup: data_wakeup.value
    } ) 

    .then(data =>{
      data_created.value=''
      bed_time.value=''
      data_wakeup.value=''
      wakeup_time.value=''
      this.props.createDataSuccess()
    })
    
    .catch(res =>{
      this.setState({
        error:JSON.stringify(res.error)
      })
    }
    
    )
      
  }

  
    render(){
      const { error } = this.state
        return(
         
            <main role="main">
            <header>
              <NavBar/>
              <h1>Hi, {this.props.user_name} -Create New Record</h1>
              {error && <p>{error}</p>}
             
            </header>
            <section>
              <form id="sleep-record" onSubmit={this.handleRecordSubmit}>
                <div className="form-section">
                  <section>
                  <label htmlFor="getDate">Date - go to bed</label>
                  <input type="date" id="data_created" name="data_created" required/>
                  <label htmlFor="bed-time">Go to Bed time: </label>
                  <input id="bed-time" type="time" name="bed_time" required/>
                  </section>
                  <section>
                  <label htmlFor="getDate">Date - wake up</label>
                  <input type="date" id="data_wakeup" name="data_wakeup" required/>
                  <label htmlFor="wakeup-time">Wake up time: </label>
                  <input id="wakeup-time" type="time" name="wakeup_time" required/>
                  </section>
                <button type="submit">Submit</button>
                </div>
              </form>
            </section>
          </main>
          
        )
    }
}
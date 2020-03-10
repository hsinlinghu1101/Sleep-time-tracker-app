import React from 'react'
import NavBar from '../NavBar/NavBar'

export default class Home extends React.Component{
    render(){
        return(
            <main role="main">
            <header>
              <NavBar/>
              <h1>New Record</h1>
            </header>
            <section>
              <form id="record-sleep">
                <div className="form-section">
                  <label htmlFor="getDate">Date</label>
                  <input type="date" value='' name="getDate" required/>
               
                  <label htmlFor="bed-time">Go to Bed time: </label>
                  <input id="bed-time" type="time" name="bed-time" value=" "/>
                  <label htmlFor="awake-time">Wake up time: </label>
                  <input id="awake-time" type="time" name="awake-time" value=" "/>
                <button type="submit">Submit</button>
                </div>
              </form>
            </section>
          </main>
        )
    }
}
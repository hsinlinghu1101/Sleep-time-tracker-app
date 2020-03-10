import React from 'react'
import { Link } from 'react-router-dom'


export default function Landing(){
    return(
    <main role="main">
      <section>
        <div>
            <h3>Introduction</h3>
        </div>
        
        <p>In today’s fast-paced society, six or seven hours of sleep may sound pretty good. In reality, the average adult sleeps less than seven hours per night.Sleep Time Tracker record your total hours of sleep and you can create the line chart of your record</p>
      </section>
      <section>
        <div>
            <h3>Track your sleeping hours</h3>
        </div>
        <p>Sleep Time Tracker is built for people who want to record daily total hours of sleep. You can input the time when you go to bed and when you wake up. Sleep Time Tracker will display the result and provide the feedback. </p>
      </section>
      
      <section>
        <p>Let's track your sleeping hours</p>
         <Link to='/register'>Register</Link>
         <Link to='/login'>Login</Link>
      </section>
    </main>
  
    )
}
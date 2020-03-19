import React from 'react'
import { Link } from 'react-router-dom'
import sleep from '../../image/sleep.jpg';
import './Landing.css'

export default function Landing(){
    return(
    <main role="main">
      <section className='landingImg'>
        <img className='sleep' src={sleep} alt="sleep-left"/>
      </section>
      <section>
        <div>
            <h3>Introduction</h3>
        </div>
        
        <p>In today’s fast-paced society, six or seven hours of sleep may sound pretty good. In reality, the average adult sleeps less than seven hours per night. Sleep Time Tracker records your total hours of sleep per day.</p>
      </section>
      <section>
        <div>
            <h3>Track your sleeping hours</h3>
        </div>
        <p>Sleep Time Tracker was built for people above 14 years old who want to keep track of daily total hours of sleep. You can input the time when you went to bed and when you woke up. Sleep Time Tracker will display the result and provide feedback based on your age.</p>
      </section>
      
      <section>
        <h3>Let's track your sleeping hours</h3>
        <div className='register'><Link to='/register'>Register</Link></div>
        <div className='login'><Link to='/login'>Login</Link></div>
      </section>
      <div className='end'></div>
    </main>
  
    )
}
import React from 'react'
import { Link } from 'react-router-dom'
import sleep1 from '../../image/sleep1.jpg';
import sleep2 from '../../image/sleep2.jpg'
import './Landing.css'

export default function Landing(){
    return(
    <main role="main">
      <section>
        <img className='sleep one' src={sleep1} alt="sleep-left"/>
        <p className='empty'></p>
        <img  className='sleep two' src={sleep2} alt="sleep-right"/>
      </section>
      <section>
        <div>
            <h3>Introduction</h3>
        </div>
        
        <p>In today’s fast-paced society, six or seven hours of sleep may sound pretty good. In reality, the average adult sleeps less than seven hours per night.Sleep Time Tracker record your total hours of sleep </p>
      </section>
      <section>
        <div>
            <h3>Track your sleeping hours</h3>
        </div>
        <p>Sleep Time Tracker is built for people above 14 years old who want to record daily total hours of sleep. You can input the time when you go to bed and when you wake up. Sleep Time Tracker will display the result and provide the feedback based on your age. </p>
      </section>
      
      <section>
        <p>Let's track your sleeping hours</p>
        <div className='register'><Link to='/register'>Register</Link></div>
        <div className='login'><Link to='/login'>Login</Link></div>
      </section>
    </main>
  
    )
}
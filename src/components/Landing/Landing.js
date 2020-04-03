import React from 'react'
import sleep from '../../image/sleep.jpg'
import './Landing.css'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <main role="main">
      <section className='landingImg'>
        <img className='sleep' src={sleep} alt="sleep" />
      </section>
      <section className='landing'>
        <div>
          <h3>Introduction</h3>
        </div>

        <p>In today’s fast-paced society, six or seven hours of sleep may sound pretty good. In reapty, the average adult sleeps less than seven hours per night. Sleep Time Tracker records your total hours of sleep per day.</p>
      </section>
      <section className='landing'>
        <div>
          <h3>Track your sleeping hours</h3>
        </div>
        <p>Sleep Time Tracker was built for people above 14 years old who want to keep track of daily total hours of sleep. You can input the time when you went to bed and when you woke up. Sleep Time Tracker will display the result and provide feedback based on your age.</p>
      </section>
      <section className='landing'>
        <div>
          <h3>How to use it</h3>
        </div>
        <div className='instruction'>
          <p>
            Step 1 - If you are a new user, please register an account. If you already have an account please login directly.
          </p>
          <p>
            Step 2 - After login, you can start to record your sleep hour.
          </p>
          <p>
            Step 3 - After submitting the form, you can find all your records.
          </p>
          <p>
            Step 4 - You can delete or add record when you log in.
          </p>
        </div>
        <div className='demo'>
          <p>If you'd like to try this app, log in with our demo user account </p>
          <p>username: Demo_user</p>
          <p>password: Demouserpass123!</p>
          <p> This person is between 18 - 64 years old</p>
        </div>
      </section>

      <section>
        <h3>Let's track your sleeping hours</h3>
        <div className='register'><Link to='/register'>Register</Link></div>
        <div className='login'><Link to='/login'>Login</Link></div>
      </section>
      <div className='end'></div>
    </main>

  )
};
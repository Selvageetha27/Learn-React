import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import './GrowingPlant.css'


function GrowingPlant2() {


  return (
    <>
      <div className='form'>
        <h3>Sign in to your account</h3>
        <div className='letter'>
        <div>Email</div>
        <input type="email" placeholder='Your Email' />
        <div>Password</div>
        <input type="password" placeholder='Your Password' /></div>
      <div className='pass'>Forget Password?</div>
      <div className='btn'><button>Sign In</button></div>
      <div className='acc'>
        <p className='para'>Don't have an account</p>
        <p className='clk'>Click Here</p>
      </div>
    </div >
    </>
    
   
  )
}

export default GrowingPlant2
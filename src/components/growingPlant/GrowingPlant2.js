import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import './GrowingPlant.css'


function GrowingPlant2() {
  const [email, setemail] = useState("")
  const [username, setusername] = useState("")
  const [pnumber, setpnumber] = useState("")
  const [passwd, setpasswd] = useState("")

  return (
    <>
      <div>{email}</div>
      <div>{username}</div>
      <div>{pnumber}</div>
      <div>{passwd}</div>
      <div className='form'>
        <h3>Sign in to your account</h3>
        <div className='letter'>
          <div>UserName</div>
          <input type="text" placeholder='Your UserName' onChange={(e) => {
            setusername(e.target.value)

          }} />
          <div>Email</div>
          <input type="email" placeholder='Your Email' onChange={(e) => {
            setemail(e.target.value)

          }} />
          <div>Pnum</div>
          <input type="number" placeholder='Your Phone number' onChange={(e) => {
            setpnumber(e.target.value)

          }} />
          <div>Password</div>
          <input type="password" placeholder='Your Password' onChange={(e) => {
            setpasswd(e.target.value)

          }} /></div>

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
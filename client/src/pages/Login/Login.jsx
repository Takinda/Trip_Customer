import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='Login-container'>
        <div className="Header">
            <p>My Trip</p>
        </div>
        <div className="Body">
            <h2>LOGIN</h2>
            <hr />
            <form action='/login' method='post'>
                <div className="inp-container">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='Enter email' required/>

                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder='Enter password' required/>

                    <label htmlFor="Remember" className='Remember'>Remember me <input type="checkbox"/></label>
                    <p>Forgot Password? <a href='/'>Click here</a></p>
                    <p>Are you new here? <a href='/Register'>Register</a></p>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
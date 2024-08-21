import React,{useState} from 'react'
import './Login.css'

function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handlePassword = (e) => {
        setPassword(e.target.value);
      };

      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
  return (
    <div className='Login-container'>
        <div className="Header">
            <p>My Trip</p>
        </div>
        <div className="Body">
            <h2>LOGIN</h2>
            <hr />
            <form action='/home'>
                <div className="inp-container">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='Enter email' value={email} onChange={handleEmail} required/>

                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder='Enter password' value={password} onChange={handlePassword} required/>

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
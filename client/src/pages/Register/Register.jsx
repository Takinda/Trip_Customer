import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function Register() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (password !== e.target.value) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    }
    else {
      axios.post('http://localhost:5000/api/register', {
        username: e.target[0].value,
        email   : e.target[1].value, 
        password: e.target[2].value
      })
      .then((res) => {
        if (res.data.error) {
          setError(res.data.error);
        } else {
          window.location.href = '/login';
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  return (
    <div className='Register-container'>
      <div className="Header">
        <p>My Trip</p>
      </div>
      <div className="Body">
        <h2>REGISTER</h2>
        <hr />
        <form action='/register' onSubmit={handleSubmit} method='post'>
          <div className="inp-container">
            <label htmlFor="Name">Name</label>
            <input type="text" placeholder='Enter Name' required/>

            <label htmlFor="Email">Email</label>
            <input type="email" placeholder='Enter email' required/>

            <label htmlFor="Password">Password</label>
            <input 
              type="password" 
              placeholder='Enter password' 
              required
              value={password}
              onChange={handlePassword}
            />

            <label htmlFor="Password_confirm">Confirm Password</label>
            <input 
              type="password" 
              placeholder='Enter password' 
              required
              value={confirmPassword}
              onChange={handleConfirmPassword}
            />

            {error && <p className="error">{error}</p>}
          </div>
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

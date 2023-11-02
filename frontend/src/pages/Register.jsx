import React from 'react'
import './css/Register.css'
export default function Register() {
  return (
    <>
    <div className='body'>

  
      <div class="wrapper">
        <form action="">
            <h1>form</h1>
            <div class="input-box">
            <input type="text"placeholder='enter your first name'required/>
            <i class="bi bi-person-fill"></i>
        </div>
        <div class="input-box">
            <input type="text"placeholder='enter your last name'required/>
            <i class="bi bi-person-fill"></i>
        </div>
        <div class="input-box">
            <input type="password"placeholder='enter your password'required/>
            <i class="bi bi-lock-fill"></i>
        </div>
        <div class="input-box">
            <input type="password"placeholder='enter your password'required/>
            <i class="bi bi-lock-fill"></i>
        </div>
        <div class="remembar-forgot">
            <label><input type="checkbox"/>remember me</label>
            <a href="http://">forget pasword?</a>
        
        </div>
     <button type="button" class="btn">submit</button>
     <div class="register-link">
        <p>Dont have an account?<a href="http://">Register</a></p>
     </div>
        </form>
    </div>
    </div>
    </>
  )
}

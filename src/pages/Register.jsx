import React from 'react'
import addAvatar from "../assets/img/addAvatar.png";

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">chattanSpace</span>
        <span className="title">Register</span>
        <form action="">
          <input type="text" className="text" placeholder='display name' />
          <input type="email" className="email" placeholder='email' />
          <input type="password" className="password" placeholder='password' />
          <input type="file" style={{ display: "none" }} className="file" id='file' />
          <label htmlFor="file">
            <img src={addAvatar} alt="" />
            <span>Upload foto profil</span>
          </label>
          <button>Daftar</button>
        </form>
        <p>Sudah punya akun? Login</p>
      </div>
    </div>
  )
}

export default Register
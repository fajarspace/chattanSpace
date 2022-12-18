import React from 'react'

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
          <input type="file" className="file" />
          <button>Daftar</button>
        </form>
        <p>Sudah punya akun? Login</p>
      </div>
    </div>
  )
}

export default Register
import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">chattanSpace</span>
        <span className="title">Login</span>
        <form action="">
          <input type="email" className="email" placeholder='email' />
          <input type="password" className="password" placeholder='password' />
          <input type="file" style={{ display: "none" }} className="file" id='file' />
          <button>Masuk</button>
        </form>
        <p>Belum punya akun? Daftar</p>
      </div>
    </div>
  )
}

export default Login
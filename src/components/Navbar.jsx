import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">chattanSpace</span>
      <div className="user">
        <img src="https://avatars.githubusercontent.com/u/52228231?v=4" alt="" />
        <span>Fajar</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
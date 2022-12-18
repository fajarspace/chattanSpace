import React from 'react'
import Add from "../assets/img/add.png";
import Cam from "../assets/img/cam.png";
import More from "../assets/img/more.png";

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Fajar</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chat
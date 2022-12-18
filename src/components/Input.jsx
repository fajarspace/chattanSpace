import React from 'react'
import Img from "../assets/img/img.png";
import Attach from "../assets/img/attach.png";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='ketik..' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Kirim</button>
      </div>
    </div>
  )
}

export default Input
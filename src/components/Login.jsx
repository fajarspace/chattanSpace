import React from 'react'
import { GoogleCircleFilled, FacebookFilled } from "@ant-design/icons";

const Login = () => {
  return (
    <div id='login-page' >
      <div id="login-card">
        <h2>Chattan Space</h2>
        <div className="login-button google">
          <GoogleCircleFilled /> Masuk dengan Google
        </div><br /><br />
        <div className="login-button facebook">
          <FacebookFilled /> Masuk dengan Facebook
        </div>
      </div>
    </div>
  )
}

export default Login
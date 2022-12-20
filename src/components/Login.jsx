import React from 'react'
import { GoogleCircleFilled, FacebookFilled } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  return (
    <div id='login-page' >
      <div id="login-card">
        <h2>Chattan Space</h2>
        <div className="login-button google" onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
          <GoogleCircleFilled /> Masuk dengan Google
        </div><br /><br />
        <div className="login-button facebook" onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
          <FacebookFilled /> Masuk dengan Facebook
        </div>
      </div>
    </div>
  )
}

export default Login
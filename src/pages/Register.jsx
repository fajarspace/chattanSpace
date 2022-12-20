import React, { useState } from 'react'
import addAvatar from "../assets/img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: 'image/jpeg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',

        (error) => {
          setError(true);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
          });
        }
      );

    } catch (error) {
      setError(true);
    }
  }

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       // ...
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });

  // }

  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">chattanSpace</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" className="text" placeholder='display name' />
          <input type="email" className="email" placeholder='email' />
          <input type="password" className="password" placeholder='password' />
          <input type="file" style={{ display: "none" }} className="file" id='file' />
          <label htmlFor="file">
            <img src={addAvatar} alt="" />
            <span>Upload foto profil</span>
          </label>
          <button>Daftar</button>
          {error && <span>Something went wrong..</span>}
        </form>
        <p>Sudah punya akun? Login</p>
      </div>
    </div>
  )
}

export default Register
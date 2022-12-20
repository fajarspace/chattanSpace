import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYAFhqqDBBopl1oTk3RX9TDXimqFjdgTc",
  authDomain: "chattanspace.firebaseapp.com",
  projectId: "chattanspace",
  storageBucket: "chattanspace.appspot.com",
  messagingSenderId: "546297181517",
  appId: "1:546297181517:web:29d3b6f5c7d6ced543f304",
  measurementId: "G-BNXX86D0QD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCYAFhqqDBBopl1oTk3RX9TDXimqFjdgTc",
  authDomain: "chattanspace.firebaseapp.com",
  databaseURL: "https://chattanspace-default-rtdb.firebaseio.com",
  projectId: "chattanspace",
  storageBucket: "chattanspace.appspot.com",
  messagingSenderId: "546297181517",
  appId: "1:546297181517:web:29d3b6f5c7d6ced543f304",
}).auth();
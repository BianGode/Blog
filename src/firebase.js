// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq1CK7iA84ZyOooMmU5M5kmEjEWL4yvwY",
  authDomain: "thought-website-40b9c.firebaseapp.com",
  projectId: "thought-website-40b9c",
  storageBucket: "thought-website-40b9c.appspot.com",
  messagingSenderId: "703706083887",
  appId: "1:703706083887:web:afd04d98684b5a03d8ccda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const db = getFirestore(app)

export {auth}
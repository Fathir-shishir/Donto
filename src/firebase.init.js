// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_rPt4C0j418f2pfRqN6ZOOHvcfLTjikw",
  authDomain: "danta-with-react.firebaseapp.com",
  projectId: "danta-with-react",
  storageBucket: "danta-with-react.appspot.com",
  messagingSenderId: "386370671412",
  appId: "1:386370671412:web:b128869a36e934f57dcb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
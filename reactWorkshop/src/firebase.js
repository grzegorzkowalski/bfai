// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYYP4tdUJ0a80jGEuauHizu4XjJ7-7ME8",
    authDomain: "securityworkshop-7ef20.firebaseapp.com",
    projectId: "securityworkshop-7ef20",
    storageBucket: "securityworkshop-7ef20.appspot.com",
    messagingSenderId: "604813224656",
    appId: "1:604813224656:web:c067b29155e5ee01db4cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
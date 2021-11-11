// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA3bFqZivlbz4-3cprSLHA2txIW4rkwPZg",
  authDomain: "fir-auth-a7dd4.firebaseapp.com",
  projectId: "fir-auth-a7dd4",
  storageBucket: "fir-auth-a7dd4.appspot.com",
  messagingSenderId: "891309607053",
  appId: "1:891309607053:web:96440e0453379e72d5fac4"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app= firebase.initializeApp(firebaseConfig);
}
else{
    app= firebase.app()
}

const auth = firebase.auth();

export { auth };
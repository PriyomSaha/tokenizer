  
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';
import 'firebase/firestore';

// Your Web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDh85hzaAIwlA5PpGPkxU2D4WO-Csd0_Ko",
    authDomain: "test-tokenizer.firebaseapp.com",
    databaseURL: "https://test-tokenizer.firebaseio.com",
    projectId: "test-tokenizer",
    storageBucket: "test-tokenizer.appspot.com",
    messagingSenderId: "985377226433",
    appId: "1:985377226433:web:48a2790fba9ec25c8ade40",
    measurementId: "G-HQJ39J5SZ7"
  };

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
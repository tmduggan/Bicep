// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqQDp516xqq_qEqAGYoafBT8gGEqqQ4zI",
  authDomain: "bicep-b6ad7.firebaseapp.com",
  projectId: "bicep-b6ad7",
  storageBucket: "bicep-b6ad7.firebasestorage.app",
  messagingSenderId: "1005111771441",
  appId: "1:1005111771441:web:b7c73a2d31766cec6ff010",
  measurementId: "G-30TK4S0NW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
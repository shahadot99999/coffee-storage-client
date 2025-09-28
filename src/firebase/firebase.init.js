// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUbiBKy6GtLKmzh-ipTSWSuxQvtFJ-VHk",
  authDomain: "coffee-store-app-58085.firebaseapp.com",
  projectId: "coffee-store-app-58085",
  storageBucket: "coffee-store-app-58085.firebasestorage.app",
  messagingSenderId: "522227492495",
  appId: "1:522227492495:web:601975fe2e4b58bb27b2fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
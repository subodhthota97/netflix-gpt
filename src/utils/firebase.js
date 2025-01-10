// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBattpc4-DjyZfw0eOFcIwSwAKzUa_309c",
  authDomain: "netflixgpt-e19a8.firebaseapp.com",
  projectId: "netflixgpt-e19a8",
  storageBucket: "netflixgpt-e19a8.firebasestorage.app",
  messagingSenderId: "44934995025",
  appId: "1:44934995025:web:046c86bbe1194e23bfac70",
  measurementId: "G-0XS8JYLP7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
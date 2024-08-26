// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a7e04.firebaseapp.com",
  projectId: "mern-estate-a7e04",
  storageBucket: "mern-estate-a7e04.appspot.com",
  messagingSenderId: "900294107871",
  appId: "1:900294107871:web:fe2af42821e8272d75bf6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
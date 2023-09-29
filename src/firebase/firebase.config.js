// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.Next_Public_apiKey, 
  authDomain:process.env.Next_Public_authDomain,
  projectId:process.env.Next_Public_projectId,
  storageBucket:process.env.Next_Public_storageBucket,
  messagingSenderId:process.env.Next_Public_messagingSenderId,
  appId:process.env.Next_Public_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
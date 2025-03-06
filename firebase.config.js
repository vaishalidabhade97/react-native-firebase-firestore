// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxxxx",
  authDomain: "xxxxxx",
  projectId: "xxxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx",
  appId: "xxxxxx",
  measurementId: "xxxxx",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseFirestore = getFirestore(app);

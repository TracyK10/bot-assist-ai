// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKjLoHea_c6nhgppNL7f1ymkeSBUHdB2g",
  authDomain: "inventory-management-7b988.firebaseapp.com",
  projectId: "inventory-management-7b988",
  storageBucket: "inventory-management-7b988.appspot.com",
  messagingSenderId: "434156509724",
  appId: "1:434156509724:web:958e6a50d7b0b9d9d5ddd9",
  measurementId: "G-TXG6RYDNT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCq1e7Q_IMYRIwXJKCcNoaOeOfim4MTDI",
  authDomain: "customer-support-897d7.firebaseapp.com",
  projectId: "customer-support-897d7",
  storageBucket: "customer-support-897d7.appspot.com",
  messagingSenderId: "628643236672",
  appId: "1:628643236672:web:d2ece85f2384cf1f02c8a5",
  measurementId: "G-0QS42LZWF3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
const db = getFirestore(app);

export { db };
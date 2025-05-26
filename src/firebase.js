// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwUGNxYMDlxNccqUcmpKZTpjZHNoLMVm0",
  authDomain: "pelatihan-sintak-firebase.firebaseapp.com",
  projectId: "pelatihan-sintak-firebase",
  storageBucket: "pelatihan-sintak-firebase.firebasestorage.app",
  messagingSenderId: "1052917708857",
  appId: "1:1052917708857:web:15901bbee82878d88575e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
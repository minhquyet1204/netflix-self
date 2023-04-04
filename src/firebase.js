// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZoKBna7daHdrAVLDM91TyBglg6wH3BmE",
  authDomain: "netflix-7e8cf.firebaseapp.com",
  projectId: "netflix-7e8cf",
  storageBucket: "netflix-7e8cf.appspot.com",
  messagingSenderId: "261049121979",
  appId: "1:261049121979:web:6678a06f8f4527f2b17d9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import {doc, setDoc, getDoc, onSnapshot, collection} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDBx8n3u87uMgyScQG34Duh_EWOObRix8k",
  authDomain: "disny-clone-d702f.firebaseapp.com",
  projectId: "disny-clone-d702f",
  storageBucket: "disny-clone-d702f.firebasestorage.app",
  messagingSenderId: "956992194486",
  appId: "1:956992194486:web:a6a8f98ca196c43fede317",
  measurementId: "G-74RHT3ZSQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, doc, setDoc, getDoc, onSnapshot,collection };
export default db;

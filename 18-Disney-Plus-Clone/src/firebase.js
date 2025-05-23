import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2-mJlIG5HJxbfNED3EHfP1UQGy67uYy4",
  authDomain: "mern-watsapp-ca9e9.firebaseapp.com",
  projectId: "mern-watsapp-ca9e9",
  storageBucket: "mern-watsapp-ca9e9.firebasestorage.app",
  messagingSenderId: "730150564746",
  appId: "1:730150564746:web:50abce3dcf95162f758e73",
};

//initialize firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, doc, setDoc, getDoc, onSnapshot, collection };
export default db;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo7PoBbM6tiMRry3OqgRLqdiF8nomye9s",
  authDomain: "clothing-e-shop-db.firebaseapp.com",
  projectId: "clothing-e-shop-db",
  storageBucket: "clothing-e-shop-db.appspot.com",
  messagingSenderId: "176220815555",
  appId: "1:176220815555:web:a47de193794f1eeb196276",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

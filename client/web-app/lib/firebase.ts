import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6MkHfA8A4sdKStDoHoU6PmTrXLkIktOo",
  authDomain: "perfectline-io.firebaseapp.com",
  projectId: "perfectline-io",
  storageBucket: "perfectline-io.firebasestorage.app",
  messagingSenderId: "265009724463",
  appId: "1:265009724463:web:c32019839a8ff2ecec1ada",
  measurementId: "G-Y9FBEQ0Y24",
};

// Initialize Firebase (prevent re-initialization in dev mode)
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

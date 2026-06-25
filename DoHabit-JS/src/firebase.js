import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATGIjVUfST8NP_88uhmup6As-yqKdbRBQ",
  authDomain: "dohabit-9a31b.firebaseapp.com",
  projectId: "dohabit-9a31b",
  storageBucket: "dohabit-9a31b.firebasestorage.app",
  messagingSenderId: "667213657248",
  appId: "1:667213657248:web:5c3e3e397322b7ed1c05c5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
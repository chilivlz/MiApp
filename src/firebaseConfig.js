
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCk9A40mrAFxeiMcxmHoO1jYnMc4thctk4",
  authDomain: "reactfinal-fc47f.firebaseapp.com",
  projectId: "reactfinal-fc47f",
  storageBucket: "reactfinal-fc47f.appspot.com",
  messagingSenderId: "1099277148311",
  appId: "1:1099277148311:web:2894820021f87476cf49d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
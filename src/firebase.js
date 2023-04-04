
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDhMugJyYU5dhOxAExUVzWa5Tw-Dy3qadA",
  authDomain: "chat-ca026.firebaseapp.com",
  projectId: "chat-ca026",
  storageBucket: "chat-ca026.appspot.com",
  messagingSenderId: "418650278",
  appId: "1:418650278:web:d6e5f55660c713b79e3c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();



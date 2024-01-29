// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_3iexkCZV1ueFw-f0vYGWMzqibkXw94E",
  authDomain: "ecommerce-d273e.firebaseapp.com",
  projectId: "ecommerce-d273e",
  storageBucket: "ecommerce-d273e.appspot.com",
  messagingSenderId: "700428456865",
  appId: "1:700428456865:web:41b06162fd0b2ea81d71e0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
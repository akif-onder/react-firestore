import { initializeApp } from "firebase/app";

import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeMO4bTlY5NTbooxtCH0VAaMn7S8bHbCo",
    authDomain: "fir-firestore-e525e.firebaseapp.com",
    projectId: "fir-firestore-e525e",
    storageBucket: "fir-firestore-e525e.appspot.com",
    messagingSenderId: "787204694778",
    appId: "1:787204694778:web:86fb048345cdfa5f90df43",
    measurementId: "G-9FPVF3WQ9D"
  };

  

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
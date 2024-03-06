import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6IiTwwYixLUzxgydsy7MsWe31zynIX6Y",
  authDomain: "udemy-modern-javascript-dc88b.firebaseapp.com",
  projectId: "udemy-modern-javascript-dc88b",
  storageBucket: "udemy-modern-javascript-dc88b.appspot.com",
  messagingSenderId: "229251160118",
  appId: "1:229251160118:web:a0241af6c1eebb328e2097",
  measurementId: "G-K9MQR8623G"
};


// connect to firestore
initializeApp(firebaseConfig);

// init services
const db = getFirestore(); 

//collection reference
const chatsRef = collection(db, 'chats');
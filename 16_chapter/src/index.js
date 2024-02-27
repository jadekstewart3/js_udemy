// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6IiTwwYixLUzxgydsy7MsWe31zynIX6Y",
  authDomain: "udemy-modern-javascript-dc88b.firebaseapp.com",
  projectId: "udemy-modern-javascript-dc88b",
  storageBucket: "udemy-modern-javascript-dc88b.appspot.com",
  messagingSenderId: "229251160118",
  appId: "1:229251160118:web:a0241af6c1eebb328e2097",
  measurementId: "G-K9MQR8623G"
};

//init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

//collection reference
const colRef = collection(db, 'recipies');

//get collection data
getDocs(colRef).then((snapshot) => {
  let recipies = []; 
  snapshot.docs.forEach((doc) =>{
    recipies.push({...doc.data(), id: doc.id})
  })
  console.log(recipies);
})
.catch(error => console.log(error.message));
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';

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
const list = document.querySelector('ul');

const addRecipe = (recipe) => {
  let time = recipe.created_at.toDate();
  let html = 
  `
  <li>
    <div>${recipe.title}</div>
    <div>${time}</div>
  </li>
  `;
  list.innerHTML += html;
}

getDocs(colRef).then( snapshot => {
  snapshot.docs.forEach(doc => {
    addRecipe(doc.data()); 
  });
}).catch(error => {console.log(error.message)});

//add documents
const form = document.querySelector('form'); 

form.addEventListener("submit", e =>{
  e.preventDefault();

  addDoc(colRef, {
    title: form.recipe.value,
    created_at: new Date()
  }).then(() => {
    form.reset();
    console.log('recipe added');
  }).catch(error => {
    console.log(error.message);
  });
});


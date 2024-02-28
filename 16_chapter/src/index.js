// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, onSnapshot, addDoc, deleteDoc, doc} from 'firebase/firestore';

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

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = 
  `
  <li data-id="${id}">
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">Delete</button>  
  </li>
  `;
  list.innerHTML += html;
}

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach(recipe => {
    if(recipe.getAttribute('data-id') === id){
      recipe.remove();
    }
  });
}

//get real time collection data
const unsub = onSnapshot(colRef, snapshot => {
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if(change.type === 'added'){
      addRecipe(doc.data(), doc.id);
    } else if(change.type === 'removed'){
      deleteRecipe(doc.id); 
    }
  });
});

//add documents
const form = document.querySelector('form'); 

form.addEventListener("submit", e =>{
  e.preventDefault();

  addDoc(colRef, {
    title: form.recipe.value,
    created_at: new Date()
  }).then(() => {
    form.reset();
    console.log('Recipe Added!');
  }).catch(error => {
    console.log(error.message);
  });
});

//delete documents
list.addEventListener('click', e => {
  if(e.target.tagName === "BUTTON"){
    const id = e.target.parentElement.getAttribute('data-id');
    const docRef = doc(db, 'recipies', id);
    deleteDoc(docRef).then(() => {
      console.log('Recipe Deleted!');
    });
  }
});

//unsub from database changes
const button = document.querySelector('button');
button.addEventListener('click', () => {
  unsub();
  console.log('Unsubscribed from collection changes');
});
// store the function that litens to the database changes in a variable and call it to stop listening to the changes
// then call the function to stop listening to the changes

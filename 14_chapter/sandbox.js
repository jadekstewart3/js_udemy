// store data in local storage
// localStorage.setItem('name', 'mario');
// localStorage.setItem('age', '50');


//get data from local storage
// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');

// console.log(name);
// console.log(age);

// updating data

// localStorage.setItem('name', 'luigi');
// localStorage.age = '40';

// name = localStorage.getItem('name');
// age = localStorage.age;

// console.log(name, age);

// deleting data from local storage
// localStorage.removeItem("name");
//remove an element from local storage
// localStorage.clear();
//remove all items from local storage

//Stringify and parse data  

const todos = [
  { "text": "make fun of luigi", "author": "Mario" },
  { "text": "rescue peach (again)", "author": "Mario" },
  { "text": "go kart racing", "author": "Mario" }
];
// console.log(JSON.stringify(todos));
//similar to symbolize in ruby but the opposite

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));

//parse the data back into an array
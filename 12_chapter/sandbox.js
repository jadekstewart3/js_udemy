// Async JavaScript
// Governs how we perform tasks which take some time to coplete(like getting data from a database)
// start something now and finish it later

// Synchronous code
// JavaScript can run ONE statement at a time

// Making HTTP requests  (XHR)

// const getTodos = (resource) => {
//   return new Promise((resolve, reject)=> {

//     const request = new XMLHttpRequest();
//     // XMLHttpRequest is built into the javascript language
  
//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("could not fetch the data");
//       }
//     });
  
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/luigi.json").then( data =>{
//   console.log("promise resolved:", data);
// }).catch( error =>{
//   console.log("promise rejected:", error);
// });


// getTodos('todos/luigi.json', (error, data) => {
//   console.log(data);
//   getTodos('todos/mario.json', (error, data) => {
//     console.log(data);
//     getTodos('todos/jade.json', (error, data) => {
//       console.log(data);
//     });
//   });
// });

//promise example
// const getSomething = () =>{
//   return new Promise((resolve, reject) => {
//     // resolve("some data");
//     reject("some error");
//   });
// };

// getSomething().then((data) =>{
//   console.log(data);
// }, (error) => {
//   console.log(error);
// });

// getSomething().then((data) => {
//   console.log(data);
// }).catch(error => {
//   console.log(error);
// })
// promises either resolve or reject something
// kind of like begin rescue blocks in ruby

//JSON data
// JavaScript Object Notation
// Format for sending data
//take json strings and convert them into javascript objects
// JSON.parse() takes a json string and converts it into a javascript object
// JSON.stringify() takes a javascript object and converts it into a json string

// promise is an object that represents the eventual completion or failure of an asynchronous operation
//promise is in one of three states
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: meaning that the operation completed successfully
// 3. rejected: meaning that the operation failed
// a promise is settled if it's not pending, meaning it has either been fulfilled or rejected
// once settled, a promise can not be resettled
// promise.then() is used to handle the fulfilled and rejected states
// promise.catch() is used to handle the rejected state
// promise.finally() is used to handle the settled state


//fetch api
// fetch("todos/luigi.json").then(response => {
//   console.log("resolved", response);
//   return response.json();
// }).then(data =>{
//   console.log(data);
// }).catch( err => {
//   console.log("rejected", err)
// });
//fetch the data
//return response.json() returns a promise
//then we can use the data from the json file
//catch any errors

//async and await

const getTodos = async () => {
 const response = await fetch("todos/luigis.json");
 if(response.status !== 200){
  throw new Error("cannot fetch the data");
 }
  const data = await response.json();
  
  return data;
};

getTodos().then(data => console.log("resolved:", data))
.catch(err => console.log("rejected:", err.message));
//async function always returns a promise
//await can only be used inside an async function
//await pauses the execution of the function until the promise is resolved
//await only works with promises
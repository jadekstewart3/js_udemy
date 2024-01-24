// Async JavaScript
// Governs how we perform tasks which take some time to coplete(like getting data from a database)
// start something now and finish it later

// Synchronous code
// JavaScript can run ONE statement at a time

// What are HTTP requests?

// Make HTTP requests to get data from another server

// We make these requests to the API endpoints

// Making HTTP requests  (XHR)

const getTodos = (resource) => {
  return new Promise((resolve, reject)=> {

    const request = new XMLHttpRequest();
    // XMLHttpRequest is built into the javascript language
  
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("could not fetch the data");
      }
    });
  
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/luigi.json").then( data =>{
  console.log("promise resolved:", data);
}).catch( error =>{
  console.log("promise rejected:", error);
});


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
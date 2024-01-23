// Async JavaScript
// Governs how we perform tasks which take some time to coplete(like getting data from a database)
// start something now and finish it later

// Synchronous code
// JavaScript can run ONE statement at a time

// What are HTTP requests?

// Make HTTP requests to get data from another server

// We make these requests to the API endpoints

// Making HTTP requests  (XHR)

const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  // XMLHttpRequest is built into the javascript language

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

getTodos('todos/luigi.json', (error, data) => {
  console.log(data);
  getTodos('todos/mario.json', (error, data) => {
    console.log(data);
    getTodos('todos/jade.json', (error, data) => {
      console.log(data);
    });
  });
});

//JSON data
// JavaScript Object Notation
// Format for sending data
//take json strings and convert them into javascript objects
// JSON.parse() takes a json string and converts it into a javascript object
// JSON.stringify() takes a javascript object and converts it into a json string
// Async JavaScript
// Governs how we perform tasks which take some time to coplete(like getting data from a database)
// start something now and finish it later

// Synchronous code
// JavaScript can run ONE statement at a time

// What are HTTP requests?

// Make HTTP requests to get data from another server

// We make these requests to the API endpoints

// Making HTTP requests  (XHR)

const getTodos = (callback) => {
  const request = new XMLHttpRequest();
  // XMLHttpRequest is built into the javascript language

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.send();
};

getTodos((error, data) => {
  console.log("callback fired");
if(error){
  console.log(error);
} else {
  console.log(data);
}});

//JSON data
// Async JavaScript
// Governs how we perform tasks which take some time to coplete(like getting data from a database)
// start something now and finish it later

// Synchronous code
// JavaScript can run ONE statement at a time

// What are HTTP requests?

// Make HTTP requests to get data from another server

// We make these requests to the API endpoints

// Making HTTP requests  (XHR)

const request = new XMLHttpRequest();
// XMLHttpRequest is built into the javascript language

request.addEventListener("readystatechange", () => {
  // console.log(request, request.readyState);
  if(request.readyState === 4){
    console.log(request.responseText);
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//first argument is the type of request we want to make
// second argument is the url we want to make the request to
//kind of like establishing a connection in ruby
request.send();
// sends the request to the server
// The DOM
//created by the browser
//'document' object
//interact with the html code using JS
//describes html page as a tree of nodes
//each node is an object

// const para = document.querySelector("p");
//para references the p tag- just the first one

// const para = document.querySelector(".error");
//can use to select by css selector

// const para = document.querySelectorAll("div.error");
//can combine selectors to be more specific
// console.log(para);

//you can also copy selectors straight from the console

//querySelectorAll returns a node list
//like an array but not an array
// const paras = document.querySelectorAll("p");
// console.log(paras[0]);
//returns the first element in the node list
//can use array methods on node lists

// paras.forEach(para => {
//   console.log(para);
// });

// const errors = document.querySelectorAll(".error");
// console.log(errors);

//Other ways to query the DOM

//get element by ID

// const title = document.getElementById("page-title");

//need # if using query selector

// console.log(title);

//get elements by their class name

// const errors = document.getElementsByClassName("error");
// console.log(errors);
//returns an HTML collection
//can use array methods on HTML collections
//cannot use forEach

//get elements by their tag name
// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

//query selector is more flexible can iterate over node lists
//get elements by class name is more specific

//Adding and changing page content

// const para = document.querySelector('p');

// console.log(para.innerText);
//.innerText is a property

// para.innerText = "ninjas are awesome!";
//can manipulate the text

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += " new text";
// });
//can change the text of all the elements in the node list

//changing the html content

// const content = document.querySelector(".content");
//need the . to select by class name

// console.log(content.innerHTML);

// content.innerHTML = "<h2>this is a new h2</h2>";
//changes the content of the div with class content

// const people = ["mario", "luigi", "yoshi"];

// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// })

//will aphend the p tags to the div with the class content

//getting and setting attributes

// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));
//returns the value of the href attribute

// link.setAttribute("href", "https://www.thenetninja.co.uk");
//kind of like gsub for html
// link.innerText = "The Net Ninja Website";

// const mssg = document.querySelector("p");

// console.log(mssg.getAttribute("class"));

// mssg.setAttribute("class", "success");
//changes the class to success

// mssg.setAttribute("style", "color: green;");
//adds a style attribute

//changing css styles
// const title = document.querySelector("h1");
// title.setAttribute("style", "margin: 50px;");
//overwrites the style attribute

//add extra styles

// console.log(title.style);
//returns a CSSStyleDeclaration object

// console.log(title.style.color);

// title.style.margin = "50px";
//this is how you add styles

// title.style.color = "crimson";
//updates color while keeping margin

// title.style.fontSize = "60px";
//increases font size keeping other styles

//delete styles

// title.style.margin = "";

//Adding and removing classes

// const content = document.querySelector("p");

// console.log(content.classList);
//get classes

//add a class

// content.classList.add("error");

//remove a class
// content.classList.remove("error");

//toggle a class

// content.classList.toggle("success");

//challenge
// select all p tags
//iterate through the list and add success class if it contains success
//add error class if it contains error

// const paras = document.querySelectorAll("p");
//my solution
// paras.forEach(para => {
//   if (para.innerText.includes("success")) {
//     para.classList.add("success");
//   } else if (para.innerText.includes("error")) {
//     para.classList.add("error");
//   }
// });
//this does not work if the text is not visible on the page
//the solution
// paras.forEach(para => {
//   if(para.textContent.includes("error")){
//     para.classList.add("error");
//   }else if(para.textContent.includes("success")){
//     para.classList.add("success")
//   }
// })
//this solution works if the text is not visible on the page

// const title = document.querySelector(".title");

// title.classList.toggle("test");
//adds the class test
// title.classList.toggle("test");
//removes the class test

//PARENTS CHILDREN AND SIBLINGS

//node relations = relationships between nodes  

// const article = document.querySelector("article");

// console.log(article.children);

// console.log(Array.from(article.children));
//converts the HTML collection to an array so you can forEach over it
//does not alter the original HTML collection

// Array.from(article.children).forEach(child => {
//   child.classList.add("article-element");
// })
//adds a class to each child
//can use this to add a class to each child of a parent

// const title = document.querySelector("h2");

// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
//returns the parent of the parent
// console.log(title.nextElementSibling);
//returns the next sibling
// console.log(title.previousElementSibling);
//returns the previous sibling

//chaining
// console.log(title.nextElementSibling.parentElement.children);
//returns all the children of the parent of the next sibling
//in the form of an HTML collection

//EVENTS BASICS

//react to a user clicking on a button
// query the DOM to get the element where we expect the event to happen
// add an event listener to that element
//write a callback function that runs whene the event happnens

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   console.log("you clicked me");
// });
//the first argument is the event we are listening for
//the second argument is the callback function
//the callback function is called when the event happens
//when the click event happens the text is logged to the console

// const items = document.querySelectorAll("li");
//returns a node list that you can iterate through

// items.forEach(item => {
//   item.addEventListener("click", e =>{
    // console.log('item clicked')
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = "line-through";
//     e.target.remove();
//   });
// });

//cycles through the list items and adds an event listener to each one

//CREATING AND REMOVING ELEMENTS
 
///delete an element from the DOM
// const ul = document.querySelector("ul");
// ul.remove();
//this will remove the ul and its contents from the dom


// adding content to a webpage

// const  button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   ul.append(li);
// });
//creates a new li element and adds it to the ul element

//EVENT BUBBLING (and delgation)

//when an even occurs that element becomes the event target
//the event bubbles up through the DOM
//the event bubbles up to the parent element
//if it finds an event listener on the parent element it will run the callback function
// const ul = document.querySelector("ul");
// const button = document.querySelector("button");
// const items = document.querySelectorAll("li");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   ul.prepend(li);
// });

// items.forEach(item => {
//   item.addEventListener("click", e  => {
//     console.log("event in LI");
//     e.stopPropagation();
//     e.target.remove();
//   });
// });

// ul.addEventListener("click", e => {
  // console.log("event in UL");
  // console.log(e.target);
// });

//this will log the event in the li and the ul
//the event bubbles up to the parent element

//we can stop the event from bubbling up using stopPropagation

//EVENT DELEGATION

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new to do";
//   ul.prepend(li);
// });

// ul.addEventListener("click", e => {
  // console.log(e);
//   if(e.target.tagName === "LI"){
//     e.target.remove();
//   }
// });


//event listers are expensive
//kind of like routing a button click in rails but with JS

const copy = document.querySelector(".copy-me");
copy.addEventListener("copy",() => {
  console.log("OI! My content is copyright!");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", e => {
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos ${e.offsetX} - y pos ${e.offsetY}`;
});
//this will log the x and y position of the mouse in the box

document.addEventListener("wheel", e => {
  console.log(e.pageX, e.pageY);
});
//wheel is a scroll event
//this will log the x and y position of the mouse on the page
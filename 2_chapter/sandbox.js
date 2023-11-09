// alert("hello world");

// console.log(1);
// console.log(2);

//variables and constants

let age = 20;
let year = 2025;
console.log(age, year);
//returns 25 2025 to console

age = 25;
// changes value of age variable

console.log(age);
//returns 30 to console

const points = 100;
//creates a constant variable
console.log(points);

// points = 50;
//returns error as points is a constant variable and cannot be changed

// older keyword for creating variables

var score = 75;
console.log(score);

//returns 75 to console
//will only use const and let in this course


/* variables cannot start with a number 
 or let or const those are reserved words */

//data types
/*numbers
  strings
  booleans
  null - explicitly set to  empty value
  object - complex data structures - arrays, dates, literals
  symbol - used with objects */

//strings
console.log("hello world");

let email = "mario@gmail.com";
console.log(email);

//string concatenation
let firstName = "Jade";
let lastName = "Stewart";

let fullName = firstName + " " + lastName;

console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);
//length is a property which is why there are no parenthesis
//string methods
console.log(fullName.toUpperCase());
//methods have parenthesis at the end of them
//returns JADE STEWART to console
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf("@");
console.log(index);

//common string methods
let result2 = email.lastIndexOf("o");

console.log(result2);

let result3 = email.slice(0, 5);
//first argument is the starting index
//second argument is the ending index
console.log(result3);
//returns mario to console

let result4 = email.substr(4, 10);

console.log(result4);
//returns o@gmail to console

let result5 = email.replace("m", "w");
// similar to gsub in ruby, but only replaces first instance
console.log(result5);

//numbers
let radius = 10;
const pi = 3.14;

console.log(radius, pi);
//ints and floats are both numbers in js
//math operators +, -, *, /, **, %
//order of operations - B I D M A S

let likes = 10; 
// likes = likes + 1;
// console.log(likes);

likes++;
console.log(likes);
//returns 11 to console - short hand version also works for - * /

likes+=10;
console.log(likes);
//returns 21 to console, this is just like ruby shorthand

//Nan - not a number
console.log(5 / "hello");
//returns Nan to console

//template strings - template literal
// allows us to inject variables into strings - interpolation in ruby
const title = "Best reads of 2020";
const author = "Mario";
const likes2 = 30;

let result6 = `The blog called ${title} by ${author} has ${likes2} likes`;
//use backticks to create template strings
console.log(result6);

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes2} likes</span>
`;
console.log(html);

//arrays
//arrays fall under the object datatype in js

let ninjas = ["shaun", "ryu", "chun-li"];
// ninjas[1] = "ken";
// console.log(ninjas[1]);

//array methods

let result7 = ninjas.join(" , ");

let result8 = ninjas.concat(["ken", "crystal"]);

let result9 = ninjas.push("ken");
// pushes a new value on to the array and returns the length of the array
// alters original value of object
console.log(ninjas);

let result10 = ninjas.pop();
// removes last value from array and returns it
console.log(ninjas);

//comparison operators
// ==, !=, >, <, >=, <=
//when comparing strings lower case letters are greater than upper case letters

//loose vs strict comparison

//loose comparison - different types can still be equal
console.log(age == 25);

//strict comparison - different types cannot be equal
console.log(age === 25); // true
console.log(age !== 25); // false
//is age the same value and type as the age vairable
//does not convert types

//type conversion
//turing one data type into another
let score2 = "100";
score = Number(score2);
//explicit type conversion
console.log(score + 1);
//returns 101 to console

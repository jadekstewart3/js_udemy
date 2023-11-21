//for loops
// const names = ['shaun', 'mario', 'luigi'];
// for(let i = 0; i < names.length; i++){
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

//while loops
// let i = 0;

// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

//do while loops
// let i = 5;
// do{
//   console.log('val of i is: ', i);
//   i++;
// }while(i < 5);
//do while loops will always run at least once
 
//if statements
// const age = 22;
// if(age > 20){
//   console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
// if(ninjas.length > 3){
//   console.log("that's a lot of ninjas");
// }

// const password = "passworeah";

// if(password.length >= 12){
//   console.log('that password is mighty strong');
// } else if(password.length >= 8){
//   console.log('that password is long enough');
// } else{
//   console.log('password is not long enough');
// }

//logical operators
// const password = "p@ssword123";
// if(password.length >= 12 && password.includes('@')){
//   console.log('that password is mighty strong');
// }

//break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for(let i = 0; i< scores.length; i++){
//   if(scores[i] === 0){
//     continue;
//     //jumps out of iteration and moves on to next iteration
//   }

//   console.log('your score :', scores[i]);

//   if(scores[i] === 100){
//     console.log('congrats, you got the top score!');
//     break;
//   }
// }

//switch statements

// const grade = 'A';

// switch(grade){
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got an B!');
//     break;
//   case 'C':
//     console.log('you got an C!');
//     break;
//   case 'D':
//     console.log('you got an D!');
//     break;
//   case 'E':
//     console.log('you got an E!');
//     break;
//   default:
//     console.log("not a valid grade");
// }
//break keyword keeps code from running through all cases below the matching case
//switch statements use strict equality === to evaluate cases

//variables and block scope
let age = 30;
//cannot change value of let variable within the same scope
//let and const are block scoped
//var is function scoped
console.log(age);
if(true){
  age = 40;
  //can only access this version of age within this code block
  console.log(age, "First code block");
}

//FUNctions
//just like ruby methods
//have parentheses for some reason

//function declaration
function greet(){
  //code for function goes here
  console.log('hello, there cutie!');
}
//invoke the function
greet();

//function expression
const speak = function(name){
  console.log(`good day! ${name}`);
};
//invokation
speak("Jade");

//function delcarations are hoisted to the top of the file

//arrow functions
const calcArea = (radius) => 3.14 * radius**2;
//doesnt use the function keyword
//dont need parentheses if only one parameter
//do need parentheses if no parameters or more than one
//dont need curly braces if only one line of code

const area = calcArea(5);
console.log(area);

//functions vs methods
//methods are functions within objects

//functions
const name = "shaun";

const greet2 = () => "hello";

let result11 = greet2();
console.log(result11);

//methods
let resultTwo = name.toUpperCase();
console.log(resultTwo);
//defined on a data type or object
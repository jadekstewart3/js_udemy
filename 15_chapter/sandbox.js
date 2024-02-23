//What is OOps in JS?
//object in JS is like an object in Ruby
//primitive data types get wrapped in an object to use methods

//object literal notation

//literal way to create an object
// const userOne = {
//   username: 'ryu',
//   email: 'ryu@gmail.com',
//   login(){
//     console.log('the user logged in');
//   },
//   logout(){
//     console.log('the user logged out');
//   }
// };

// console.log(userOne.email, userOne.username);
// userOne.login();

//would be easier to use a constructor function

//Classes
//class is like a blueprint for an object - describes all the basic properties and functionality that an object should have
//object is an instance of a class


//classes

// class User {
//   constructor(username, email){
//     //set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }
//   //arrow functions dont bind a value to the this keyword when they are called
//   login(){
//     console.log(`${this.username} just logged in`);
//     return this;
//   };

//   logout(){
//     console.log(`${this.username} just logged out`);
//     return this;
//   }

//   incScore(){
//     this.score ++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// const userOne = new User('mario', 'mario@gmail.com'); 
// const userTwo = new User('luigi', 'luigi@gmail.com');
// //must return an object explicitly in JS otherwise it will return undefined

// class Admin extends User {
//   constructor(ussername, email, title){
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(user){
//     users = users.filter(u => 
//       u.username !== user.username);
//     }
//   }
  
//   const userThree = new Admin('yoshi', 'yoshi@gmail.com', "black-belt-ninja");
//   let users = [userOne, userTwo, userThree];

// userThree.deleteUser(userTwo);
// console.log(userThree);

// the new keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of this to the new empty object
// 3 - i calls the constructor function to build the 

function User(username, email){
  this.username = username;
  this.email = email;
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
}

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
}

function Admin(username, email){
  User.call(this, username, email);
  this.title = title
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(){
  //delete a user
};

const userOne = new User('mario', 'mario@thenetninja.com');
const userTwo = new User('luigi', 'luigi@thenetninja.com');
const userThree = new Admin('Peach', 'peach@thenetninja.com', 'black-belt-ninja');
userOne.login();

//Prototypes
// every object in JS has a prototype
// prototypes contain all the methods for that object type
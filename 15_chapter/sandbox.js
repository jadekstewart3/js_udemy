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

class User {
  constructor(username, email){
    //set up properties
    this.username = username;
    this.email = email;
  }
}
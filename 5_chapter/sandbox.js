//objects- everything in js is an object YAY!
// objects have propterties and things it can do 
// properties are like variables attached to the object
// methods are like functions attached to the object

//Object Literals
// let user = {
//   name: "crystal",
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'Berlin',
//   blogs: [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }
//   ],
//   login: function(){
//     console.log('the user logged in');
//   },
//   logout(){
//     console.log('the user logged out');
//   },
//   logBlogs(){
//     console.log('this user has written the following blogs:')
//     this.blogs.forEach(blog => {
//       console.log(blog.title, `likes: ${blog.likes}`)
//     })
//   }
// };

  // console.log(user);

  //basically just like a ruby hash
  //can access the properties with dot notation or square bracket notation
  // bracket notation is useful when you want to use a variable to access the property
  // const key = 'location';
  // console.log(user[key]);
  //im not really sure why you would do this but ok

  // console.log(typeof user);

  //adding methods to objects
  // user.login();
  // user.logout();
  // user.logBlogs();

  //Math Object

  // console.log(Math);
  // console.log(Math.PI);
  // console.log(Math.E);
  //very much like ruby math but js syntax
  
  //Primitive vs Reference Types

  //primitive types
  //numbers
  //strings
  //booleans
  //null
  //undefined
  //symbols

  //reference types
  //all types of objects
  //arrays
  //object literals
  //functions
  //dates
  //all other objects

  //stack & heap
  //stack is a small amount of memory that is allocated to your application
  //heap is a large pool of memory that is available to your application
  //stack is fast but limited
  //heap is slower but can be much larger
  
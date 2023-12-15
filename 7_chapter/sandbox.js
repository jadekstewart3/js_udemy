//form events
//sublmit events
//when we are listening for a submit event we dont attach it to the submit button
//we attach it to the form itself

//get a reference to the form
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value)
  // console.log(form.username.value);
  //validation
 const username = form.username.value;
 if(usernamePattern.test(username)){
  //feedback good info
  feedback.textContent = 'that username is valid!';
 }else{
  //feedback help info
  feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
 }
});

//live feedback
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)){
    form.username.setAttribute('class', 'success');
  }else{
    form.username.setAttribute('class', 'error');
  }
});
//attaching a submit event will submit the form even if the user just hits enter
//submit events by default just refresh the browser
//can use dot notation to get the value of the input with the id or name of the input

//Regular Expressions
//regex101.com
//validations for forms
//^ start of expression
//$ end of expression
//[] character set
//{1,8} range of characters
// . any character allows special characters too
// + one or more characters
// \ escape character
// \w word character
// \d digit character
// \s whitespace character
// \t tab character
// \n newline character
// \W non-word character
// \D non-digit character
// \S non-whitespace character
// ? optional character
// | or operator
// () group characters together
// i case insensitive modifier
// g global search modifier

//testing regex

// const username = "shaunp";

// create a regex and store it in a variable
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username);
// console.log(result);

// if(result){
//   console.log('regex test passed :)');
// } else{
//   console.log('regex test failed :(');
// }

// let result = username.search(pattern);
//returns the index of the first match
// console.log(result);

//basic form validation
// see method above

//keyboard events
//keyup event
// fires a callback function when a key is released
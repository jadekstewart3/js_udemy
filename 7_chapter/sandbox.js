//form events
//sublmit events
//when we are listening for a submit event we dont attach it to the submit button
//we attach it to the form itself

//get a reference to the form
const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value)
  console.log(form.username.value);
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


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
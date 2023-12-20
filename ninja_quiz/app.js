//checking answers
const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  const result = document.querySelector('.result');
  
  // check answers
  userAnswers.forEach((answer, index)=> {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });
  //show result on page
  scrollTo(0,0); //scroll to top of page
  result.querySelector('span').textContent = `${score}%`;
  result.classList.remove('d-none');
});
const clock = document.querySelector('.clock');

const tick = () => {
  const now = new Date(); //date object

  const h = now.getHours(); //hours

  const m = now.getMinutes(); //minutes

  const s = now.getSeconds(); //seconds

  const html = `
  <span>${h}</span> :
  <span>${m}</span> : 
  <span>${s}</span>
  `; //template literal

  clock.innerHTML = html; //set the clock's inner html to the html variable
};

setInterval(tick, 1000); //runs every second
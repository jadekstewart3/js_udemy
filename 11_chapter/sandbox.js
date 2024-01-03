//dates & times
const before = new Date('February 1 2019 7:30:59');
const now = new Date();
//new keyword goes to the constructor

//year, months, day, times

console.log("getFullYear:", now.getFullYear());
console.log("getMonth:", now.getMonth());
//month is zero based
//returns 0-11
console.log("getDate:", now.getDate());
console.log("getDay:", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());


//timestamps
console.log("timestamp:", now.getTime());
//milliseconds since jan 1st 1970

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


const diff = now.getTime() - before.getTime();

console.log(diff);

//time conversion

const mins = Math.round(diff / 1000 / 60);
console.log(mins);
const hours = Math.round(mins / 60);
console.log(hours);
const days = Math.round(hours / 24);
console.log(days);

//converting timestamps into date objects

const timestamp = 1675938474990;
console.log(new Date(timestamp));
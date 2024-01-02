//dates & times

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



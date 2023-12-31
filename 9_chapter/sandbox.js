//Array Methods

//filter method
//just like filter in ruby
// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filteredScores = scores.filter((score) => {
//   return score > 20;
// });

// console.log(filteredScores);

// const users = [
//   { name: "shaun", premium: true },
//   { name: "yoshi", premium: false },
//   { name: "mario", premium: false },
//   { name: "chun-li", premium: true },
// ];

// const premiumUsers = users.filter((user) => {
//   return user.premium;
// });

// console.log(premiumUsers);

//map method
//just like map in ruby
// const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const sale_prices = prices.map(price => price / 2);

// console.log(sale_prices);

// const products = [
//   { name: "gold star", price: 20 },
//   { name: "mushroom", price: 40 },
//   { name: "green shells", price: 30 },
//   { name: "banana skin", price: 10 },
//   { name: "red shells", price: 50 },
// ];

// const SaleProducts = products.map(product => {
//   if (product.price > 30){
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });

// console.log(SaleProducts);  

//reduce method

// const scores = [10, 20, 60, 40, 70, 90, 30];

// const results = scores.reduce((acc, curr) => {
//   if (curr > 50){
//     acc++;
//   }
//   return acc;
// }, 0);

// 0 at the end is the initial value of acc

// console.log(results);

// const scores = [
//   { player: "mario", score: 50 },
//   { player: "yoshi", score: 30 },
//   { player: "mario", score: 70 },
//   { player: "crystal", score: 60 },
//   { player: "mario", score: 90 },
//   { player: "yoshi", score: 30 },
//   { player: "mario", score: 70 },
//   { player: "crystal", score: 60 },
//   { player: "mario", score: 80 },
//   { player: "yoshi", score: 30 },
//   { player: "mario", score: 70 },
//   { player: "crystal", score: 60 },
// ];

// const marioTotal = scores.reduce((acc, curr) => {
//   if(curr.player === "mario"){
//     acc += curr.score;
//   }
//   return acc;
// }, 0);

// console.log(marioTotal);

//find method
//returns the first value that matches the condition
//just like find in ruby

// const scores = [10, 5, 0, 40, 60, 10, 20, 70];

// const firstHighScore = scores.find(score => score > 50);
// console.log(firstHighScore);

//sort method

// const names = ["mario", "shaun", "chun-li", "yoshi", "luigi"];

// names.sort();

// console.log(names);
//alters the original array
//sorts alphabetically
//numbers get a little weird

// names.reverse();  //reverses the array
//same as ruby

const players =[
  { name: "mario", score: 20 },
  { name: "luigi", score: 10 },
  { name: "chun-li", score: 50 },
  { name: "yoshi", score: 30 },
  { name: "shaun", score: 70 },
];
//sort by score

//long way
// players.sort((a, b) => {
//   if(a.score > b.score){
//     return -1;
//   } else if (b.score > a.score){
//     return 1;
//   } else{
//     return 0;
//   }
// });
// console.log(players);


// players.sort((a, b) => b.score -a.score);

// console.log(players);

//does exctly the same thing as above
//sorts by having a positive, negative, or 0 value

//chaining array methods

const products = [
  { name: "gold star", price: 30 },
  { name: "green shell", price: 10 },
  { name: "red shell", price: 40 },
  { name: "banana skin", price: 5 },
  { name: "mushroom", price: 50 },
];

// filter the array
// map to new array

// const filtered = products.filter(product => product.price > 20);

// const promos = filtered.map(product => {
//   return `the ${product.name} is $${product.price / 2}`
// });

const promos = products
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is $${product.price / 2}`);

console.log(promos);
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
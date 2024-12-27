// require("./xyz.js");
// const calculateSum = require("./sum.js");

// const sumObj = require("./sum.js");
// const {x, calculateSum} = require("./sum.js"); // destructuring on the fly
// const {x, calculateSum} = require("./sum");
// import { calculateSum } from "./calculate/sum.js";
// var userName = "manveer";
// console.log(userName);
// // console.log(calculateSum(5,6));

// // console.log(sumObj.calculateSum(5,5));
// // console.log(sumObj.x);

// console.log(calculateSum(5,5));
// console.log(x);

// console.log(global);
// console.log(globalThis);
// console.log(global === globalThis);

const { calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");
console.log(calculateSum(5,6));
console.log(calculateMultiply(5,7));
console.log(JSON.stringify(data));
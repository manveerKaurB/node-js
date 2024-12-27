
// Modules protects their functions and variables from leaking
// const x = "hello from sum.js";
calculateSum = function (a, b) {
    const result = a + b;
    console.log(result);
}

module.exports = calculateSum;

//  module.exports = {x, calculateSum};

// export function calculateSum(a, b) {
//     console.log(a + b);
// }

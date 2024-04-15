// Anonymous function
let sumOfNumbers = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
};

// IIFE
let sum = (function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
})([1, 2, 3, 4, 5]);
console.log(sum);
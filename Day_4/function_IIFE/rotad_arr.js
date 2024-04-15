// Anonymous function
let rotateArray = function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
};

// IIFE
let rotatedArray = (function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);
console.log(rotatedArray);
// Anonymous function
let removeDuplicates = function(arr) {
    return [...new Set(arr)];
};

// IIFE
let uniqueArray = (function(arr) {
    return [...new Set(arr)];
})([1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(uniqueArray);
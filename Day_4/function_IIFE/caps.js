// Anonymous function
let titleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};

// IIFE
let titleCapsResult = (function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
})(["hello", "world", "javascript"]);
console.log(titleCapsResult);

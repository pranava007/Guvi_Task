// Anonymous function
let getPalindromes = function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

// IIFE
let palindromes = (function(arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
})(["level", "hello", "radar", "world", "madam"]);
console.log(palindromes);
// Anonymous function
let printOddNumbers = function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
};

// IIFE
(function(arr) {
    for (let num of arr) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
})([1, 2, 3, 4, 5]);

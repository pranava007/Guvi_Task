// Anonymous function
let medianOfArrays = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
};

// IIFE
let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);
    return sortedArray.length % 2 !== 0 ? sortedArray[mid] : (sortedArray[mid - 1] + sortedArray[mid]) / 2;
})([1, 3, 5], [2, 4, 6]);
console.log(median);

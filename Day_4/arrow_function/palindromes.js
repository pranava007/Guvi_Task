let getPalindromes = arr => arr.filter(str => str === str.split('').reverse().join(''));

console.log(getPalindromes(["level", "hello", "radar", "world", "madam"]));
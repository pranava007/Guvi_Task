let convertToTitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(convertToTitleCaps(["hello", "world", "javascript"]));
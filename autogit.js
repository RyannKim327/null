let arr = [1, 2, 3, 4, 2, 3, 5];

let uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);

console.log(uniqueArray);

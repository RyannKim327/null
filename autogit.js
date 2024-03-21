let array = [1, 2, 3, 4, 2, 5, 1, 6, 3];

let uniqueArray = array.filter((item, index) => {
    return array.indexOf(item) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
let array = [1, 2, 3, 4, 2, 5, 1, 6, 3];

let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

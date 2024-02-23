let array = [1, 2, 3, 3, 4, 5, 5];

let uniqueArray = array.filter((item, index) => {
    return array.indexOf(item) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 3, 4, 5, 5];

let uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

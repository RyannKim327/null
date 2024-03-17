let array = [1, 2, 3, 4, 2, 5, 3];
let uniqueArray = Array.from(new Set(array));
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 4, 2, 5, 3];
let uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 4, 2, 5, 3];
let uniqueArray = array.reduce((acc, current) => {
    if (acc.indexOf(current) === -1) {
        acc.push(current);
    }
    return acc;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

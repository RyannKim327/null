let arr = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = [...new Set(arr)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = arr.reduce((acc, current) => {
    if (acc.indexOf(current) === -1) {
        acc.push(current);
    }
    return acc;
}, []);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

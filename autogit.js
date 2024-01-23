const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = array.filter((element, index, arr) => arr.indexOf(element) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
const array = [1, 2, 3, 4, 4, 5, 6, 6];
const uniqueArray = [];

for (const element of array) {
    if (!uniqueArray.includes(element)) {
        uniqueArray.push(element);
    }
}

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

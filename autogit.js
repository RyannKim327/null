let array = [1, 2, 3, 3, 4, 4, 5];
let uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 3, 4, 4, 5];
let uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let array = [1, 2, 3, 3, 4, 4, 5];
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
    }
}
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

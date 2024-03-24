const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

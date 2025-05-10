const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((value, index) => array.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.reduce((accumulator, current) => {
    if (!accumulator.includes(current)) {
        accumulator.push(current);
    }
    return accumulator;
}, [] as number[]); // Specify type if needed

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];
const seen: { [key: number]: boolean } = {};
const uniqueArray: number[] = [];

array.forEach(value => {
    if (!seen[value]) {
        seen[value] = true;
        uniqueArray.push(value);
    }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

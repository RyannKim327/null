const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = array.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray = array.reduce<number[]>((acc, value) => {
    if (!acc.includes(value)) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array = [1, 2, 2, 3, 4, 4, 5];

const uniqueArray: number[] = [];
const seen: { [key: number]: boolean } = {};

array.forEach(value => {
    if (!seen[value]) {
        seen[value] = true;
        uniqueArray.push(value);
    }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

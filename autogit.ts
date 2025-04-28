const array: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = Array.from(new Set(array));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const uniqueArray: number[] = [...new Set(array)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = array.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = array.reduce<number[]>((acc, value) => {
    if (!acc.includes(value)) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const array: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = [];
const seen: { [key: number]: boolean } = {};

for (const value of array) {
    if (!seen[value]) {
        uniqueArray.push(value);
        seen[value] = true;
    }
}

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

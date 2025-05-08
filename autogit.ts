const arrayWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = Array.from(new Set(arrayWithDuplicates));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const uniqueArray: number[] = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = arrayWithDuplicates.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = arrayWithDuplicates.reduce((accumulator, current) => {
    if (!accumulator.includes(current)) {
        accumulator.push(current);
    }
    return accumulator;
}, [] as number[]);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
const seen: { [key: number]: boolean } = {};
const uniqueArray: number[] = [];

arrayWithDuplicates.forEach(value => {
    if (!seen[value]) {
        seen[value] = true;
        uniqueArray.push(value);
    }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

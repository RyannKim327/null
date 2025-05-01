const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(arrayWithDuplicates));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.filter((item, index) => {
    return arrayWithDuplicates.indexOf(item) === index;
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.reduce((acc: number[], item) => {
    if (!acc.includes(item)) {
        acc.push(item);
    }
    return acc;
}, []);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray: number[] = [];

arrayWithDuplicates.forEach(item => {
    if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
    }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

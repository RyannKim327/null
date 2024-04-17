const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = Array.from(new Set(arrayWithDuplicates));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = arrayWithDuplicates.filter((item, index) => arrayWithDuplicates.indexOf(item) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

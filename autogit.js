let arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5, 6];
let uniqueArray = Array.from(new Set(arrayWithDuplicates));

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]
let arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5, 6];
let uniqueArray = arrayWithDuplicates.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6]

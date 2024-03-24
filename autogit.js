let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [...new Set(arrayWithDuplicates)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = arrayWithDuplicates.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

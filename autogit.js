function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

let arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

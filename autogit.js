const arr = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = arr.filter((value, index) => arr.indexOf(value) === index);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = Array.from(new Set(arr));
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = [...new Set(arr)];
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 2, 4, 3, 5];
const uniqueArray = [];
for (const element of arr) {
  if (!uniqueArray.includes(element)) {
    uniqueArray.push(element);
  }
}
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

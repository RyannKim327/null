const array = [5, 2, 1, 3, 4];
array.sort((a, b) => a - b);
console.log(array);  // Output: [1, 2, 3, 4, 5]
const array = [5, 2, 1, 3, 4];
array.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log(array);  // Output: [1, 2, 3, 4, 5]
const array = [5, 2, 1, 3, 4];
const sortedArray = [];
while (array.length > 0) {
  const minValue = Math.min(...array);
  sortedArray.push(minValue);
  array.splice(array.indexOf(minValue), 1);
}
console.log(sortedArray);  // Output: [1, 2, 3, 4, 5]

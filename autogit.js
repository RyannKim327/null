function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)];
  const left = [];
  const equal = [];
  const right = [];

  for (let value of arr) {
    if (value < pivot) {
      left.push(value);
    } else if (value === pivot) {
      equal.push(value);
    } else {
      right.push(value);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}
const array = [5, 3, 8, 2, 1, 4];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 8]

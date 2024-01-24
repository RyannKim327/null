function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (const element of arr) {
    if (element < pivot) {
      less.push(element);
    } else if (element === pivot) {
      equal.push(element);
    } else {
      greater.push(element);
    }
  }

  return quickSort(less).concat(equal, quickSort(greater));
}

// Example usage:
const unsortedArray = [5, 2, 6, 1, 3, 9, 4];
const sortedArray = quickSort(unsortedArray);

console.log(sortedArray);  // output: [1, 2, 3, 4, 5, 6, 9]

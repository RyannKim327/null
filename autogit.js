function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
const array = [3, 0, 2, 5, -1, 4, 1];
const sortedArray = quickSort(array);
console.log(sortedArray); // Output: [-1, 0, 1, 2, 3, 4, 5]

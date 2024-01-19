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
const arr = [5, 9, 1, 3, 4, 6, 6, 3, 2];
console.log(quickSort(arr)); // Output: [1, 2, 3, 3, 4, 5, 6, 6, 9]

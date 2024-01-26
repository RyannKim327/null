function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const arr = [7, 2, 9, 4, 5, 1, 8, 3, 6];
console.log(quicksort(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

function quicksort(arr) {
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
  
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const array = [5, 3, 8, 4, 2, 1, 9, 6, 7];
console.log(quicksort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

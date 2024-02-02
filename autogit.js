function quickSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: an array with 0 or 1 element is already sorted
  }

  const pivot = arr[arr.length - 1]; // Choose the rightmost element as pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements smaller than pivot go to the left array
    } else {
      right.push(arr[i]); // Elements greater than or equal to pivot go to the right array
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort the left and right arrays and combine them
}

// Example usage:
const array = [5, 3, 1, 6, 4, 2];
const sortedArray = quickSort(array);
console.log(sortedArray);

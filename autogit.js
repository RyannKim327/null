function quicksort(arr) {
  if (arr.length <= 1) {
    return arr; // if the array has 0 or 1 element, it is already sorted
  }

  const pivot = arr[Math.floor(arr.length / 2)]; // select a pivot element
  const left = []; // create two empty arrays for elements smaller and greater than the pivot
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === Math.floor(arr.length / 2)) continue; // skip the pivot element
    if (arr[i] < pivot) {
      left.push(arr[i]); // push smaller elements into the left array
    } else {
      right.push(arr[i]); // push greater elements into the right array
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)]; // recursively sort subarrays and combine
}

// Example usage:
const array = [8, 1, 6, 3, 7, 2, 5, 4];
const sortedArray = quicksort(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8]

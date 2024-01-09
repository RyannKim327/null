function quicksort(arr) {
  // Base case: if the array is empty or contains only one element,
  // it is already sorted.
  if (arr.length <= 1) {
    return arr;
  }

  // Choose a pivot element from the array. We'll use the last element as the pivot.
  const pivot = arr[arr.length - 1];

  // Create two empty arrays to store elements smaller and greater than the pivot.
  const left = [];
  const right = [];

  // Iterate over all elements (except the pivot) in the array.
  for (let i = 0; i < arr.length - 1; i++) {
    // If the current element is smaller than the pivot, place it in the `left` array.
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    // If the current element is greater than or equal to the pivot,
    // place it in the `right` array.
    else {
      right.push(arr[i]);
    }
  }

  // Recursively sort and concatenate the `left` and `right` arrays,
  // with the pivot in-between.
  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Example usage:
const array = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const sortedArray = quicksort(array);
console.log(sortedArray);

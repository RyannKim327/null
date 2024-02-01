function findKthSmallest(arr, k) {
  // Make a copy of the original array to avoid modifying it
  const newArr = [...arr];

  // Recursive function to partition the array and find the kth smallest element
  function partition(left, right) {
    // Choose a pivot element
    const pivot = newArr[right];

    // Move all elements smaller than the pivot to the left side of the array
    let i = left;
    for (let j = left; j < right; j++) {
      if (newArr[j] <= pivot) {
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        i++;
      }
    }

    // Move the pivot to its correct position
    [newArr[i], newArr[right]] = [newArr[right], newArr[i]];

    // Recursive calls based on the pivot position
    if (k === i) {
      // Found the kth smallest element
      return newArr[i];
    } else if (k < i) {
      return partition(left, i - 1);
    } else {
      return partition(i + 1, right);
    }
  }

  // Call the recursive function with the initial indices
  return partition(0, newArr.length - 1);
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 3;
const kthSmallest = findKthSmallest(arr, k);

console.log(`The ${k}th smallest element is: ${kthSmallest}`);

function mergeSortIterative(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  let left = arr,
    right = [];

  while (left.length > 1) {
    right.unshift(left.splice(left.length / 2));
  }

  // Merge the two sorted halves
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  
  // Concatenate the remaining elements
  arr.push(...left, ...right);

  return arr;
}

// Example usage
let arr = [8, 3, 1, 5, 2, 9, 7, 6, 4];
console.log("Before sorting:", arr);
arr = mergeSortIterative(arr);
console.log("After sorting:", arr);

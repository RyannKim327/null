function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  // Splitting the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Recursively sorting the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merging the two sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // Concatenating the remaining elements if any
  return [...result, ...left, ...right];
}

// Usage example:
const array = [8, 4, 2, 9, 1, 5, 7, 3, 6];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

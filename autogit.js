function mergeSort(arr) {
  // Base case: if the array is empty or has only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // Merge the two sorted halves
  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  // Compare elements from both halves and add the smaller value to the merged array
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Add the remaining elements from the left half (if any)
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  // Add the remaining elements from the right half (if any)
  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

// Example usage:
const arr = [5, 2, 8, 4, 1, 9, 3];
const sortedArr = mergeSort(arr);
console.log(sortedArr);

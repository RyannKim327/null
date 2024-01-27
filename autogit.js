function mergeSortIterative(arr) {
  if (arr.length < 2) return arr; // Base case: array is already sorted

  const n = arr.length;
  const temp = Array.from(arr); // Create a temporary array to store the result

  for (let width = 1; width < n; width *= 2) {
    for (let i = 0; i < n; i += 2 * width) {
      merge(arr, i, Math.min(i + width, n), Math.min(i + 2 * width, n), temp);
    }

    // Swap the arrays (temp becomes arr, arr becomes temp)
    const tempArr = arr; 
    arr = temp;
    temp = tempArr;
  }

  return arr;
}

function merge(arr, left, mid, right, temp) {
  let i = left;
  let j = mid;
  let k = left;

  while (i < mid && j < right) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  // Copy the remaining elements from the left subarray, if any
  while (i < mid) {
    temp[k++] = arr[i++];
  }

  // Copy the remaining elements from the right subarray, if any
  while (j < right) {
    temp[k++] = arr[j++];
  }
}

// Example usage:
const arr = [5, 2, 9, 1, 7];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 2, 5, 7, 9]

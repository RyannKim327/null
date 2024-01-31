// Function to merge two sorted arrays
function merge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge elements from leftArr and rightArr into the result array in sorted order
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Take care of any remaining elements in either array
  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Iterative merge sort function
function mergeSortIterative(arr) {
  const len = arr.length;
  const tempArr = [...arr];
  const result = [...arr];

  // Merge subarrays of size 1, then merge subarrays of increasing size
  for (let size = 1; size < len; size *= 2) {
    for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
      const mid = leftStart + size;
      const rightEnd = Math.min(leftStart + 2 * size, len);
      const leftArr = tempArr.slice(leftStart, mid);
      const rightArr = tempArr.slice(mid, rightEnd);
      const mergedArr = merge(leftArr, rightArr);
      result.splice(leftStart, mergedArr.length, ...mergedArr);
    }
    
    // Swap tempArr and result for the next iteration
    const temp = tempArr;
    tempArr = result;
    result = temp;
  }

  return result;
}

// Example usage:
const arr = [8, 4, 1, 6, 3, 9, 2, 7, 5];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Merge function to merge two sorted arrays
function merge(left, right) {
  let mergedArray = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements
  return mergedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Merge sort implementation
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

// Testing the implementation
const array = [8, 5, 3, 9, 1, 6, 0, 2, 4, 7];
console.log("Original array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);

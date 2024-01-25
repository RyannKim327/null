function binarySearch(arr, target, startIndex = 0) {
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] === target) {
      return midIndex;
    }

    if (arr[midIndex] < target) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }
  
  return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
const index = binarySearch(arr, target);

console.log(index); // Output: 5 (index of the target element in the array)

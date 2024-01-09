function mergeSortIterative(array) {
  const arrayLength = array.length;
  let tempArray = new Array(arrayLength);

  for (let mergeSize = 1; mergeSize < arrayLength; mergeSize *= 2) {
    for (let i = 0; i < arrayLength; i += 2 * mergeSize) {
      let start = i;
      let mid = Math.min(i + mergeSize, arrayLength);
      let end = Math.min(i + 2 * mergeSize, arrayLength);
      merge(array, tempArray, start, mid, end);
    }
    array = [...tempArray];
  }
  return array;
}

function merge(array, tempArray, start, mid, end) {
  let left = start;
  let right = mid;
  
  for (let i = start; i < end; i++) {
    if (left < mid && (right >= end || array[left] <= array[right])) {
      tempArray[i] = array[left];
      left++;
    } else {
      tempArray[i] = array[right];
      right++;
    }
  }
}
let arr = [5, 2, 8, 12, 3];
console.log("Original Array:", arr);
arr = mergeSortIterative(arr);
console.log("Sorted Array:", arr);
Original Array: [5, 2, 8, 12, 3]
Sorted Array: [2, 3, 5, 8, 12]

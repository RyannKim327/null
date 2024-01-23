function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  // base case: start index is greater than end index
  if (start > end) {
    return -1;
  }

  // calculate the middle index
  const mid = Math.floor((start + end) / 2);

  // check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }

  // if target is less than the middle element, search the left half
  if (target < arr[mid]) {
    return binarySearch(arr, target, start, mid - 1);
  }

  // if target is greater than the middle element, search the right half
  return binarySearch(arr, target, mid + 1, end);
}
const sortedArray = [1, 4, 7, 9, 12, 15, 17, 20, 22];
const targetNumber = 17;

const result = binarySearch(sortedArray, targetNumber);
console.log(result); // outputs: 6

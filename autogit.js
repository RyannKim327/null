function binarySearch(array, target, start, end) {
  // Check if the start index is undefined, default it to 0
  if (start === undefined)
    start = 0;
  // Check if the end index is undefined, default it to array length minus 1
  if (end === undefined)
    end = array.length - 1;

  // Base case: if the start index is greater than the end index, the target value is not found
  if (start > end)
    return -1;

  // Calculate the middle index
  let mid = Math.floor((start + end) / 2);

  // Base case: if the middle element is equal to the target value, return its index
  if (array[mid] === target)
    return mid;

  // Recursive case: if the middle element is greater than the target value,
  // search in the left half of the array (before the middle position)
  if (array[mid] > target)
    return binarySearch(array, target, start, mid - 1);

  // Recursive case: if the middle element is less than the target value,
  // search in the right half of the array (after the middle position)
  if (array[mid] < target)
    return binarySearch(array, target, mid + 1, end);
}
let arr = [2, 5, 8, 10, 18, 23, 32, 40, 49, 59];
let target = 23;

let result = binarySearch(arr, target);

if (result === -1) {
  console.log("Element not found");
} else {
  console.log("Element found at index", result);
}

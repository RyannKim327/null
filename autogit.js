function binarySearch(array, target) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let value = array[middle];

    if (value === target) {
      return middle;
    } else if (value < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1; // Element not found
}
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;
const index = binarySearch(arr, target);

if (index !== -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log("Element not found");
}

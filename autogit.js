function binarySearch(array, target, start = 0, end = array.length - 1) {
  if (start > end) {
    return -1;
  }
  
  const middle = Math.floor((start + end) / 2);
  
  if (array[middle] === target) {
    return middle;
  } else if (array[middle] > target) {
    return binarySearch(array, target, start, middle - 1);
  } else {
    return binarySearch(array, target, middle + 1, end);
  }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;

const resultIndex = binarySearch(array, target);

if (resultIndex !== -1) {
  console.log(`Target value ${target} found at index ${resultIndex}.`);
} else {
  console.log(`Target value ${target} not found in the array.`);
}

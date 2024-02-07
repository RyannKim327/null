function binarySearch(arr, searchKey, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === searchKey) {
    return middle;
  }

  if (arr[middle] > searchKey) {
    return binarySearch(arr, searchKey, start, middle - 1);
  }

  return binarySearch(arr, searchKey, middle + 1, end);
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const searchKey = 7;

const index = binarySearch(sortedArray, searchKey);
if (index !== -1) {
  console.log(`Found at index ${index}`);
} else {
  console.log('Not found');
}

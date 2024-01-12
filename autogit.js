function binarySearch(arr, target, start = 0) {
  let low = start;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === arr[mid]) {
      return mid;
    } else if (target < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return -1;
}
const myArray = [2, 4, 7, 10, 14, 16, 19, 20, 26, 29];
const targetElement = 16;

const resultIndex = binarySearch(myArray, targetElement);
console.log(resultIndex); // Output: 5

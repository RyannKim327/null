function binarySearch(arr, target) {
  let start = 0; // starting index
  let end = arr.length - 1; // ending index

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid; // found target
    } else if (target < arr[mid]) {
      end = mid - 1; // search in left half
    } else {
      start = mid + 1; // search in right half
    }
  }

  return -1; // target not found
}
let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
let target = 23;

console.log(binarySearch(arr, target)); // Output: 5

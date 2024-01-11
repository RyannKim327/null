function binarySearchRecursive(array, target, start, end) {
   if (start > end) {
      return -1; // Target value not found
   }

   let mid = Math.floor((start + end) / 2);

   if (array[mid] === target) {
      return mid; // Target value found
   } else if (array[mid] > target) {
      return binarySearchRecursive(array, target, start, mid - 1); // Search in the left half
   } else {
      return binarySearchRecursive(array, target, mid + 1, end); // Search in the right half
   }
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 6;

const result = binarySearchRecursive(array, target, 0, array.length - 1);
console.log(`Index of target value ${target}: ${result}`);

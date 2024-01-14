function quickselect(arr, k) {
  // Check if the array has only one element
  if (arr.length === 1) {
    return arr[0];
  }

  // Choose a pivot element
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];

  // Divide the array into two partitions
  const smaller = arr.filter((num) => num < pivot);
  const equal = arr.filter((num) => num === pivot);
  const larger = arr.filter((num) => num > pivot);

  // Recurse on the appropriate partition
  if (k <= smaller.length) {
    return quickselect(smaller, k);
  } else if (k <= smaller.length + equal.length) {
    return equal[0];
  } else {
    return quickselect(larger, k - smaller.length - equal.length);
  }
}
const arr = [6, 2, 8, 1, 4];
const k = 3;

const kthSmallest = quickselect(arr, k);
console.log(kthSmallest); // Output: 4

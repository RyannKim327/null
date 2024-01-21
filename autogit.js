// Utility function to get the digit at a specific place value
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Utility function to get the number of digits in the largest number in the array
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Utility function to get the maximum number of digits from all the numbers in the array
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

// Radix Sort implementation
function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    // Create 10 empty buckets
    const buckets = Array.from({ length: 10 }, () => []);

    // Distribute the numbers into buckets
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }

    // Concatenate the numbers in the buckets back into the original array
    arr = [].concat(...buckets);
  }

  return arr;
}

// Test example
const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log(sortedArray); // [2, 24, 45, 66, 75, 90, 170, 802]

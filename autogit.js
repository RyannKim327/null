// Helper function to get the digit at a specific position in a number
const getDigit = (num, pos) => Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;

// Helper function to get the number of digits in the largest number in the array
const digitCount = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

// Helper function to get the maximum number of digits in the array
const mostDigits = (arr) => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
};

// Radix sort implementation
const radixSort = (arr) => {
  const maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

// Example usage
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

// Helper function to get the digit at a specific position
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// Helper function to count the number of digits in a number
const digitCount = num => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// Helper function to find the number with the most digits
const mostDigits = arr => {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
};

// Main radix sort function
const radixSort = arr => {
  const maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    // Create an array of 10 empty arrays
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }
    // Flatten the array of arrays
    arr = [].concat(...digitBuckets);
  }
  return arr;
};

// Test the radix sort function
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

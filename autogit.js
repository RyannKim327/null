// Helper function to get the digit at a given place value
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to count the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to find the maximum number of digits in a list of numbers
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort implementation
function radixSort(nums) {
  const maxDigits = mostDigits(nums);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

// Example usage
const unsortedArray = [321, 17, 5, 81, 13, 42, 53, 85];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [5, 13, 17, 42, 53, 81, 85, 321]

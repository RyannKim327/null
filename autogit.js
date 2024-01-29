// Helper function to get the digit at a specific position
function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

// Helper function to get the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to get the maximum number of digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix sort implementation
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
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // [2, 24, 45, 66, 75, 90, 170, 802]

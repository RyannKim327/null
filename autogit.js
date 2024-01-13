// Function to get the digit at a given position
function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

// Function to get the number of digits in the largest number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to find the number with the most digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort function
function radixSort(nums) {
  const maxDigits = mostDigits(nums);
  
  for (let k = 0; k < maxDigits; k++) {
    // Create empty digit buckets
    const digitBuckets = Array.from({ length: 10 }, () => []);
  
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
  
    // Concatenate the digit buckets back into the original array
    nums = [].concat(...digitBuckets);
  }
  
  return nums;
}

// Example usage
const nums = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNums = radixSort(nums);
console.log(sortedNums);  // [2, 24, 45, 66, 75, 90, 170, 802]

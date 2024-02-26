// Function to get the digit of a number at a specific position
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to get the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to get the maximum number of digits in an array of numbers
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

// Test the radix sort function
const testArray = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(testArray)); // Outputs [2, 24, 45, 66, 75, 90, 170, 802]

// Helper function to get the digit at a certain position in a number
const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

// Helper function to find the number of digits in the largest number in a list
const digitCount = num => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);

// Helper function to find the number of digits in the largest number in an array of numbers
const mostDigits = nums => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

// Radix Sort function
const radixSort = nums => {
  const maxDigitCount = mostDigits(nums);
  
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    
    nums = [].concat(...digitBuckets);
  }
  
  return nums;
};

// Testing the radixSort function
const unsortedNumbers = [170, 45, 75, 90, 802, 2, 24, 66];
const sortedNumbers = radixSort(unsortedNumbers);
console.log(sortedNumbers); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

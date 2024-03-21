// Helper function to get the nth digit of a number
function getDigit(num, nth) {
  return Math.floor((num / Math.pow(10, nth)) % 10);
}

// Helper function to get the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper function to get the largest number of digits in an array of numbers
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// Radix Sort function
function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    
    arr = [].concat(...buckets);
  }
  
  return arr;
}

// Test the radix sort algorithm
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));

function getDigit(num: number, place: number): number {
  // Extracts digit at the given place value (0 for ones, 1 for tens, etc.)
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num: number): number {
  // Returns number of digits in num
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums: number[]): number {
  // Find the maximum number of digits in the largest number
  let maxDigits = 0;
  for (const num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

function radixSort(nums: number[]): number[] {
  const maxDigitCount = mostDigits(nums);

  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit 0-9
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (const num of nums) {
      const digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }

    // Flatten the buckets back into nums
    nums = [].concat(...digitBuckets);
  }

  return nums;
}

// Example usage:
const exampleArray = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(exampleArray)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

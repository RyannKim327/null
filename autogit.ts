function radixSort(arr: number[]): number[] {
  if (arr.length === 0) return arr;

  // Helper function to get digit at given place value
  const getDigit = (num: number, place: number): number => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  // Helper function to get total digits in the largest number
  const mostDigits = (nums: number[]): number => {
    let maxDigits = 0;
    for (const num of nums) {
      maxDigits = Math.max(maxDigits, Math.floor(Math.log10(Math.abs(num))) + 1 || 1);
    }
    return maxDigits;
  };

  const maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit 0-9
    const digitBuckets: number[][] = Array.from({ length: 10 }, () => []);

    for (const num of arr) {
      const digit = getDigit(num, k);
      digitBuckets[digit].push(num);
    }
    // Flatten the buckets back into arr
    arr = [].concat(...digitBuckets);
  }

  return arr;
}
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers)); // [2, 24, 45, 66, 75, 90, 170, 802]

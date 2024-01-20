function radixSort(arr) {
  const max = Math.max(...arr);
  const maxDigitCount = getDigitCount(max);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function getDigitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getDigitCount(nums[i]));
  }
  return maxDigits;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(unsortedArray)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

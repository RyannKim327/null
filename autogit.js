// Function to get the digit at a specific position in a number
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Function to count the number of digits in a number
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Function to find the maximum number of digits in the array
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

// Radix Sort function
function radixSort(arr) {
  let maxDigitCount = mostDigits(arr);

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}

// Example usage
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));

function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function radixSort(arr) {
  const maxDigits = mostDigits(arr);

  for (let i = 0; i < maxDigits; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}
const numbers = [43, 342, 19, 100, 1, 872];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // Output: [1, 19, 43, 100, 342, 872]

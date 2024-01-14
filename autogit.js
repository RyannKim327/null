function getDigit(num, position, radix) {
  return Math.floor(Math.abs(num) / Math.pow(radix, position)) % radix;
}
function digitCount(num, radix) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr, radix) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i], radix));
  }
  return maxDigits;
}
function radixSort(arr, radix = 10) {
  const maxDigits = mostDigits(arr, radix);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: radix }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k, radix);
      buckets[digit].push(arr[i]);
    }

    arr = [].concat(...buckets);
  }
  
  return arr;
}
const array = [897, 34, 190, 45, 7777, 234, 9876];
console.log(radixSort(array)); // [34, 45, 190, 234, 7777, 897, 9876]

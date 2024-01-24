function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}
function radixSort(arr) {
  const maxDigits = mostDigits(arr);
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const digit = getDigit(arr[i], k);
      buckets[digit].push(arr[i]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
const unsortedArray = [219, 342, 563, 100, 45, 1234, 876, 987, 234, 643];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);

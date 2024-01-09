function getMaxDigits(arr) {
  let maxDigits = 0;
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, Math.floor(Math.log10(Math.abs(num))) + 1);
  }
  return maxDigits;
}
function radixSort(arr) {
  const maxDigits = getMaxDigits(arr);
  let buckets = Array.from({ length: 10 }, () => []);
}
function radixSort(arr) {
  const maxDigits = getMaxDigits(arr);
  let buckets = Array.from({ length: 10 }, () => []);

  for (let digitPosition = 0; digitPosition < maxDigits; digitPosition++) {
    // Code for each digit position
  }
}
function radixSort(arr) {
  const maxDigits = getMaxDigits(arr);
  let buckets = Array.from({ length: 10 }, () => []);

  for (let digitPosition = 0; digitPosition < maxDigits; digitPosition++) {
    for (let num of arr) {
      let digit = Math.floor(Math.abs(num) / Math.pow(10, digitPosition)) % 10;
      buckets[digit].push(num);
    }
  }
}
function radixSort(arr) {
  const maxDigits = getMaxDigits(arr);
  let buckets = Array.from({ length: 10 }, () => []);

  for (let digitPosition = 0; digitPosition < maxDigits; digitPosition++) {
    for (let num of arr) {
      let digit = Math.floor(Math.abs(num) / Math.pow(10, digitPosition)) % 10;
      buckets[digit].push(num);
    }

    arr = [].concat(...buckets);
    buckets = Array.from({ length: 10 }, () => []);
  }

  return arr;
}
function radixSort(arr) {
  // Step 1-6 code goes here...

  return arr;
}
const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(array)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

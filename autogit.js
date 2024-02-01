function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

function getDigitCount(num) {
  return Math.floor(Math.log10(num) + 1);
}
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function radixSort(arr) {
  const max = getMax(arr);
  const maxDigits = getDigitCount(max);

  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}
const numbers = [532, 12, 75, 24, 45, 102, 9];
console.log(radixSort(numbers)); // Output: [9, 12, 24, 45, 75, 102, 532]

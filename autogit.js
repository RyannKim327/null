function radixSort(arr) {
  const max = Math.max(...arr);
  const maxDigits = countDigits(max);

  for (let digit = 0; digit < maxDigits; digit++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const digitValue = getDigit(num, digit);
      buckets[digitValue].push(num);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

function getDigit(num, pos) {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function countDigits(num) {
  return Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
}
const arr = [54, 79, 28, 40, 56, 92, 17, 3];
const sortedArr = radixSort(arr);
console.log(sortedArr); // Output: [3, 17, 28, 40, 54, 56, 79, 92]

function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigitCount = String(maxNum).length;

  for (let k = 0; k < maxDigitCount; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArr = radixSort(arr);
console.log(sortedArr); // Prints [2, 24, 45, 66, 75, 90, 170, 802]

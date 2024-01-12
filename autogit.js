function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(maxNum) + 1);

  for (let digit = 0; digit < maxDigits; digit++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
      const digitValue = Math.floor(num / 10 ** digit) % 10;
      buckets[digitValue].push(num);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}
const input = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(input);
console.log(sortedArray);

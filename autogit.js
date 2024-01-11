function radixSort(arr) {
  const getMax = (arr) => {
    let max = 0;
    for (let num of arr) {
      if (num > max) {
        max = num;
      }
    }
    return max;
  };

  const digitCount = (num) => {
    if (num === 0) {
      return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };

  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };

  const radixSortHelper = (arr) => {
    const max = getMax(arr);
    const maxDigits = digitCount(max);

    for (let digit = 0; digit < maxDigits; digit++) {
      const buckets = Array.from({ length: 10 }, () => []);

      for (let num of arr) {
        const digitValue = getDigit(num, digit);
        buckets[digitValue].push(num);
      }

      arr = [].concat(...buckets);
    }

    return arr;
  };

  return radixSortHelper(arr);
}

// Example usage:
const array = [100, 2, 15, 1, 200, 12, 99];
console.log(radixSort(array)); // Output: [1, 2, 12, 15, 99, 100, 200]

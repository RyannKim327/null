function radixSort(arr) {
  const maxNumber = Math.max(...arr);
  const maxDigits = String(maxNumber).length;

  for (let digit = 0; digit < maxDigits; digit++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let number of arr) {
      const digitValue = Math.floor((number / Math.pow(10, digit)) % 10);
      buckets[digitValue].push(number);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}

// Example usage:
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers);

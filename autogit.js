function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(maxNum) + 1);

  let buckets = Array.from({ length: 10 }, () => []);

  for (let digit = 0; digit < maxDigits; digit++) {
    for (let number of arr) {
      const currentDigit = Math.floor((number / 10 ** digit) % 10);
      buckets[currentDigit].push(number);
    }
    arr = buckets.flat();
    buckets = Array.from({ length: 10 }, () => []);
  }
  
  return arr;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);

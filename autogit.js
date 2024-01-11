function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(maxNum) + 1);

  for (let i = 0; i < maxDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = Math.floor((arr[j] / Math.pow(10, i)) % 10);
      buckets[digit].push(arr[j]);
    }

    arr = buckets.flat();
  }

  return arr;
}

// Example usage:
const unsortedArray = [43, 21, 55, 9, 87, 12, 95];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [9, 12, 21, 43, 55, 87, 95]

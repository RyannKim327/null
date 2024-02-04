function radixSort(arr) {
  if (arr.length === 0) return arr;
  
  // Find the maximum number and determine the number of digits
  const max = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(max) + 1);
}
  // Initialize buckets
  const buckets = Array.from({ length: 10 }, () => []);
  // Perform radix sort
  for (let digit = 0; digit < maxDigits; digit++) {
    for (let num of arr) {
      const radix = Math.floor((num / Math.pow(10, digit)) % 10);
      buckets[radix].push(num);
    }

    arr = [].concat(...buckets);
    buckets.forEach(bucket => (bucket.length = 0));
  }

  return arr;
}
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

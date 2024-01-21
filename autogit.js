function radixSort(arr) {
  const maxNum = Math.max(...arr);
  const maxDigits = String(maxNum).length;

  for (let i = 0; i < maxDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      const digit = Math.floor(arr[j] / Math.pow(10, i)) % 10;
      buckets[digit].push(arr[j]);
    }

    arr = [].concat(...buckets);
  }

  return arr;
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

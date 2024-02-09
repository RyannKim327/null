function radixSort(array) {
  const maxNum = Math.max(...array);
  const numPasses = Math.floor(Math.log10(maxNum) + 1);

  // Create 10 buckets
  const buckets = Array.from({ length: 10 }, () => []);

  for (let pass = 0; pass < numPasses; pass++) {
    // Distribute numbers into appropriate buckets
    for (const num of array) {
      const digit = getDigit(num, pass);
      buckets[digit].push(num);
    }

    // Concatenate numbers from buckets back into the array
    array = [].concat(...buckets);

    // Clear buckets for next pass
    for (const bucket of buckets) {
      bucket.length = 0;
    }
  }

  return array;
}

function getDigit(num, pass) {
  return Math.floor(Math.abs(num) / Math.pow(10, pass)) % 10;
}
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);
[2, 24, 45, 66, 75, 90, 170, 802]

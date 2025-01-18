function radixSort(arr: number[]): number[] {
  const RADIX = 10; // base 10 (decimal)
  let maxDigitCount = 0;
  let tmp;

  // find the number of digits in the maximum value
  for (let i = 0; i < arr.length; i++) {
    tmp = Math.floor(Math.log(arr[i]) / Math.log(RADIX));
    if (tmp > maxDigitCount) {
      maxDigitCount = tmp;
    }
  }

  // perform counting sort for every digit
  for (let i = 0; i < maxDigitCount; i++) {
    let buckets: number[][] = new Array(RADIX).fill(0).map(() => []);
    for (let j = 0; j < arr.length; j++) {
      const digit = Math.floor((arr[j] / Math.pow(RADIX, i)) % RADIX);
      buckets[digit].push(arr[j]);
    }

    // update arr with the sorted values
    arr = [].concat(...buckets);
  }

  return arr;
}

// example usage
const arr = [34, 12, 45, 2, 10, 1, 67, 89, 5, 23];
console.log(radixSort(arr)); // [1, 2, 5, 10, 12, 23, 34, 45, 67, 89]

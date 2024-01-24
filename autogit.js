function radixSort(arr) {
  const maxNum = Math.max(...arr);
  let divisor = 1;

  while (divisor < maxNum) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let num of arr) {
      buckets[Math.floor((num / divisor) % 10)].push(num);
    }

    arr = [].concat(...buckets);
    divisor *= 10;
  }

  return arr;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // [2, 24, 45, 66, 75, 90, 170, 802]

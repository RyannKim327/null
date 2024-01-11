function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
function radixSort(arr) {
  const max = getMax(arr);
  let divisor = 1;

  while (divisor < max) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      let digit = Math.floor((num / divisor) % 10);
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
    divisor *= 10;
  }

  return arr;
}
const array = [170, 45, 75, 90, 802, 24, 2, 66];

console.log(radixSort(array)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

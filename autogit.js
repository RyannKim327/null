function radixSort(arr) {
  // ...
}
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
  for (let exp = 1; max / exp > 0; exp *= 10) {
    // ...
  }
}
function radixSort(arr) {
  const max = getMax(arr);
  for (let exp = 1; max / exp > 0; exp *= 10) {
    const buckets = Array.from({ length: 10 }, () => []);
    // ...
  }
}
function radixSort(arr) {
  const max = getMax(arr);
  for (let exp = 1; max / exp > 0; exp *= 10) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      const digit = Math.floor((num / exp) % 10);
      buckets[digit].push(num);
    }
    // ...
  }
}
function radixSort(arr) {
  const max = getMax(arr);
  for (let exp = 1; max / exp > 0; exp *= 10) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      const digit = Math.floor((num / exp) % 10);
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}
const input = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(input);
console.log(sortedArray);  // Output: [2, 24, 45, 66, 75, 90, 170, 802]

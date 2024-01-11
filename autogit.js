function radixSort(arr) {
  let maxNum = Math.max(...arr);
  // ...
}
function radixSort(arr) {
  let maxNum = Math.max(...arr);
  let maxDigits = Math.ceil(Math.log10(maxNum + 1));
  // ...
}
function radixSort(arr) {
  let maxNum = Math.max(...arr);
  let maxDigits = Math.ceil(Math.log10(maxNum + 1));

  let digitBuckets = Array.from({ length: 10 }, () => []);
  // ...
}
function radixSort(arr) {
  let maxNum = Math.max(...arr);
  let maxDigits = Math.ceil(Math.log10(maxNum + 1));

  let digitBuckets = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < maxDigits; i++) {
    // ...
  }
}
function radixSort(arr) {
  let maxNum = Math.max(...arr);
  let maxDigits = Math.ceil(Math.log10(maxNum + 1));

  let digitBuckets = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < maxDigits; i++) {
    for (let j = 0; j < arr.length; j++) {
      let digit = Math.floor((arr[j] / Math.pow(10, i)) % 10);
      digitBuckets[digit].push(arr[j]);
    }

    // ...
  }
}
function radixSort(arr) {
  let maxNum = Math.max(...arr);
  let maxDigits = Math.ceil(Math.log10(maxNum + 1));

  let digitBuckets = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < maxDigits; i++) {
    for (let j = 0; j < arr.length; j++) {
      let digit = Math.floor((arr[j] / Math.pow(10, i)) % 10);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
    digitBuckets = Array.from({ length: 10 }, () => []);
  }

  return arr;
}
function radixSort(arr) {
  // Implementation here...

  return arr;
}
let unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
let sortedArray = radixSort(unsortedArray);

console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

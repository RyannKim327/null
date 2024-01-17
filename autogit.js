function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
function radixSort(arr) {
  let max = findMax(arr);
  let maxDigitCount = Math.floor(Math.log10(max) + 1);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }

    arr = [].concat(...digitBuckets);
  }

  return arr;
}
let array = [170, 45, 75, 90, 802, 24, 2, 66];
let sortedArray = radixSort(array);
console.log(sortedArray);

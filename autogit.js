const getMax = (arr) => Math.max(...arr);
const maxNumber = getMax(arr);
const maxDigits = Math.floor(Math.log10(maxNumber) + 1);
const getDigit = (num, position) => Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
const buckets = Array.from({ length: 10 }, () => []);
for (let i = 0; i < maxDigits; i++) {
  for (let j = 0; j < arr.length; j++) {
    const digit = getDigit(arr[j], i);
    buckets[digit].push(arr[j]);
  }
  arr = [].concat(...buckets);
  buckets.forEach((bucket) => (bucket.length = 0));
}
return arr;
function radixSort(arr) {
  const getMax = (arr) => Math.max(...arr);
  const maxNumber = getMax(arr);
  const maxDigits = Math.floor(Math.log10(maxNumber) + 1);
  
  const getDigit = (num, position) => Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;

  const buckets = Array.from({ length: 10 }, () => []);

  for (let i = 0; i < maxDigits; i++) {
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets);
    buckets.forEach((bucket) => (bucket.length = 0));
  }

  return arr;
}
const myArray = [23, 345, 5467, 12, 2345, 9852];
console.log(radixSort(myArray)); // Output: [12, 23, 345, 2345, 5467, 9852]

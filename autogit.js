function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function radixSort(arr) {
  const maxNum = findMax(arr);
  let numDigits = Math.floor(Math.log10(maxNum)) + 1;

  for (let i = 0; i < numDigits; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = Math.floor((arr[j] / Math.pow(10, i)) % 10);
      buckets[digit].push(arr[j]);
    }
    arr = [].concat(...buckets); // Merge the buckets into one array
  }
  
  return arr;
}
let arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original Array:", arr);
arr = radixSort(arr);
console.log("Sorted Array:", arr);

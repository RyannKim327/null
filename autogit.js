function radixSort(arr) {
  // Implementation goes here
}
function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function radixSort(arr) {
  const max = getMax(arr);
  
  // Get the number of digits in the maximum element
  const maxDigits = Math.floor(Math.log10(max) + 1);
  
  // Create the counter array
  let counter;
  for (let digit = 0; digit < maxDigits; digit++) {
    counter = Array.from({ length: 10 }, () => []);
  
    for (let i = 0; i < arr.length; i++) {
      const currentDigit = Math.floor((arr[i] / Math.pow(10, digit)) % 10);
      counter[currentDigit].push(arr[i]);
    }
  
    arr = counter.flat();
  }

  // Return the sorted array
  return arr;
}
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];

console.log(radixSort(unsortedArray));

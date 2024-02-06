function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function radixSort(arr) {
  const max = findMax(arr);
  const maxDigits = max.toString().length;

  for (let digit = 0; digit < maxDigits; digit++) {
    // Create 10 buckets (0-9) for each place value
    const buckets = Array.from({ length: 10 }, () => []);
    
    // Distribute elements into buckets based on the current digit
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const digitValue = Math.floor((num / Math.pow(10, digit)) % 10);
      buckets[digitValue].push(num);
    }
    
    // Gather elements from buckets in order
    arr = [].concat(...buckets);
  }

  return arr;
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

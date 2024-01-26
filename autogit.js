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
  let divisor = 1;
  while (divisor <= max) {
    // Create 10 buckets (0-9) to store the elements temporarily
    const buckets = Array.from({ length: 10 }, () => []);
    
    // Distribute the elements into the buckets based on the current digit (divisor)
    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(arr[i] / divisor) % 10;
      buckets[digit].push(arr[i]);
    }
    
    // Flatten the buckets back into the original array
    arr = [].concat(...buckets);
    
    divisor *= 10; // Move to the next digit
  }
  
  return arr;
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];

console.log(radixSort(arr)); // Outputs: [2, 24, 45, 66, 75, 90, 170, 802]

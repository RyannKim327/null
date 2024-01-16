function radixSort(arr) {
  const maxNum = Math.max(...arr); // Find the maximum value
  const maxDigitCount = Math.floor(Math.log10(maxNum) + 1); // Determine the number of digits
 
  for (let digit = 1; digit <= maxDigitCount; digit++) {
    const buckets = Array.from({ length: 10 }, () => []); // Create 10 buckets
 
    for (let num of arr) {
      const index = Math.floor((num % Math.pow(10, digit)) / Math.pow(10, digit - 1)); // Get the current digit
 
      buckets[index].push(num); // Place the element in the corresponding bucket
    }
 
    arr = buckets.flat(); // Concatenate all elements from the buckets back into the array 
  }
 
  return arr;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray);

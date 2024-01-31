function radixSort(arr) {
  const maxNum = Math.max(...arr); // Find the maximum number in the array
  const maxDigits = Math.floor(Math.log10(maxNum) + 1); // Determine the number of digits in the largest number

  let output = arr.slice(); // Create a new array to store the sorted values temporarily

  for (let digit = 0; digit < maxDigits; digit++) {
    const buckets = Array.from({ length: 10 }, () => []); // Create 10 buckets (0-9)

    for (let i = 0; i < output.length; i++) {
      const value = output[i];
      const digitValue = Math.floor((value / Math.pow(10, digit)) % 10); // Determine the digit value for the current digit position
      buckets[digitValue].push(value); // Place the number into the appropriate bucket
    }

    output = [].concat(...buckets); // Merge the contents of all buckets back into the output array
  }

  return output;
}

// Example usage:
const unsortedArray = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(unsortedArray);
console.log(sortedArray); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

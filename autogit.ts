function radixSort(arr: number[]): number[] {
  const maxDigits = Math.max(...arr).toString().length; // Find the maximum number of digits

  for (let digit = 0; digit < maxDigits; digit++) {
    // Perform counting sort for each digit
    const buckets: number[][] = Array.from({ length: 10 }, () => []); // Create 10 buckets for each digit value

    for (const num of arr) {
      const digitValue = Math.floor(num / Math.pow(10, digit)) % 10; // Extract the digit at the current position
      buckets[digitValue].push(num); // Add the number to the corresponding bucket
    }

    arr = [].concat(...buckets); // Flatten the buckets back into the original array
  }

  return arr;
}

// Example usage:
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedNumbers = radixSort(numbers);
console.log(sortedNumbers); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

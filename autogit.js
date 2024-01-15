function radixSort(arr) {
  const maxNum = Math.max(...arr); // Find the maximum number
  const maxDigits = Math.floor(Math.log10(maxNum) + 1); // Find the number of digits in the maximum number

  for (let digit = 0; digit < maxDigits; digit++) { // Loop through each digit position
    const buckets = Array.from({ length: 10 }, () => []); // Create 10 buckets

    for (let num of arr) { // Distribute numbers into buckets based on current digit
      const bucketPos = Math.floor((num / Math.pow(10, digit)) % 10);
      buckets[bucketPos].push(num);
    }

    arr = [].concat(...buckets); // Collect numbers from the buckets back into the original array
  }

  return arr; // Return the sorted array
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

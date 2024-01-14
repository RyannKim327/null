function radixSort(arr) {
  const maxNum = Math.max(...arr); // Find the maximum number in the array
  const maxNumDigits = String(maxNum).length; // Find the number of digits in the maximum number

  for (let i = 0; i < maxNumDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []); // Create 10 buckets for each digit (0-9)

    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i); // Get the i-th digit of the number
      buckets[digit].push(arr[j]); // Push the number into the corresponding bucket based on the i-th digit
    }

    arr = [].concat(...buckets); // Concatenate all the buckets into a new array
  }

  return arr; // Return the sorted array
}
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

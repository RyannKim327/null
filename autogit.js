function radixSort(arr) {
  // Find the maximum number in the array to determine the number of digits
  const maxNum = Math.max(...arr);
  // Start with the least significant digit and move towards the most significant digit
  for (let i = 1; Math.floor(maxNum / i) > 0; i *= 10) {
    countingSort(arr, i);
  }
  return arr;
}
function countingSort(arr, digit) {
  const count = Array(10).fill(0); // Create a count array of size 10 (0 to 9)

  // Count the occurrences of each digit based on the current digit
  for (let num of arr) {
    const index = Math.floor((num / digit) % 10);
    count[index]++;
  }

  // Modify the count array to store the correct position of each digit in the sorted array
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  const output = Array(arr.length);

  // Build the sorted array based on the count array
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const index = Math.floor((num / digit) % 10);
    output[count[index] - 1] = num;
    count[index]--;
  }

  // Copy the sorted array back to the input array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}
// Example usage:
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr));

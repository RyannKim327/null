function radixSort(arr) {
  // Find the maximum number in the array
  const maxNum = Math.max(...arr);
  
  // Iterate through each digit position
  for (let exp = 1; maxNum / exp > 0; exp *= 10) {
    // Use counting sort to sort the elements based on current digit position
    countingSort(arr, exp);
  }
  
  return arr;
}
function countingSort(arr, exp) {
  const count = new Array(10).fill(0); // Create an empty array to store the count of each digit
  const output = new Array(arr.length); // Create an array to store the sorted elements
  
  // Store the count of each element
  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }
  
  // Update the count array to store the actual position of each digit in the output array
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  
  // Build the output array in sorted order
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }
  
  // Copy the sorted elements back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}
const arr = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(arr)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

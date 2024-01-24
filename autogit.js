function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array initialized with zeros
  let count = new Array(max + 1).fill(0);

  // Store the count of each element in the count array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Modify the count array to store the actual position of each element
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a temporary array to store the sorted output
  let output = new Array(arr.length);

  // Build the output array
  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  // Copy the sorted output array back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }

  return arr;
}
let arr = [4, 2, 2, 8, 3, 3, 1];
console.log("Original Array:", arr);

arr = countingSort(arr);
console.log("Sorted Array:", arr);
Original Array: [4, 2, 2, 8, 3, 3, 1]
Sorted Array: [1, 2, 2, 3, 3, 4, 8]

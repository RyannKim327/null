function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);
  
  // Create a count array with size equal to the maximum element
  let count = new Array(max + 1).fill(0);
  
  // Count the occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  
  // Calculate the cumulative count
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }
  
  // Create a temporary output array
  let output = new Array(arr.length);
  
  // Build the output array by placing each element at its correct position
  for (let i = 0; i < arr.length; i++) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  
  // Copy the sorted elements back to the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
  
  return arr;
}

// Example usage:
let arr = [4, 2, 2, 8, 3, 3, 1];
let sortedArr = countingSort(arr);
console.log(sortedArr);

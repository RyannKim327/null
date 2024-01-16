function countingSort(arr) {
  const max = Math.max(...arr); // Find the maximum element in the array
  
  const count = new Array(max + 1).fill(0); // Create a count array
  
  arr.forEach((num) => {
    count[num]++; // Increment the count at the corresponding index
  });
  
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]; // Modify the count array
  }
  
  const output = new Array(arr.length); // Create an output array
  
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const index = count[num] - 1; // Determine the index position of the current element
    output[index] = num; // Place the element at the determined index
    count[num]--; // Decrement the count at that index
  }
  
  return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countingSort(arr)); // Output: [1, 2, 2, 3, 3, 4, 8]

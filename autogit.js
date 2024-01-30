function countingSort(array) {
  // Find the maximum element in the array
  let max = Math.max(...array);
  
  // Create an array to store the counts of each element
  let count = new Array(max + 1).fill(0);
  
  // Count the occurrences of each element
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }
  
  // Modify the count array such that each element at index i
  // stores the sum of previous counts
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  
  // Create a temporary array to store the sorted output
  let sortedArray = new Array(array.length);
  
  // Build the sorted array
  for (let i = 0; i < array.length; i++) {
    sortedArray[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }
  
  return sortedArray;
}

// Test the function
let array = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(array);
console.log(sortedArray);  // Output: [1, 2, 2, 3, 3, 4, 8]

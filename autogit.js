function countingSort(array) {
  // Step 2: Find the maximum element in the array
  let max = Math.max(...array);
  
  // Step 3: Create a count array with all elements initialized to 0
  let countArray = new Array(max + 1).fill(0);
  
  // Step 4: Iterate over the input array and count the occurrences of each element
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }
  
  // Step 5: Modify the count array to contain the correct position of each element
  for (let i = 1; i <= max; i++) {
    countArray[i] += countArray[i - 1];
  }
  
  // Step 6: Create a sorted array using the count array
  let sortedArray = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[--countArray[array[i]]] = array[i];
  }
  
  // Step 7: Return the sorted array
  return sortedArray;
}
let array = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]

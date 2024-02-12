function countingSort(array) {
  const maxValue = Math.max(...array);
  
  // Create the count array and initialize all elements to 0
  const countArray = new Array(maxValue + 1).fill(0);
  
  // Increment the count of each element in the input array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }
  
  // Modify the count array to contain the sum of counts
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }
  
  // Create the output array and place elements in it based on count array
  const outputArray = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    outputArray[countArray[array[i]] - 1] = array[i];
    countArray[array[i]]--;
  }
  
  return outputArray;
}

// Example usage:
const array = [4, 2, 10, 3, 1, 7];
const sortedArray = countingSort(array);
console.log(sortedArray); // [1, 2, 3, 4, 7, 10]

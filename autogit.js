function countingSort(array) {
  // ...
}
function countingSort(array) {
  let min = array[0];
  let max = array[0];
  
  // Find the minimum and maximum values in the array
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  // ...
}
function countingSort(array) {
  let min = array[0];
  let max = array[0];
  
  // Find the minimum and maximum values in the array
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  // Create a count array with a length equal to the range of values
  const countArray = new Array(max - min + 1).fill(0);
  
  // ...
}
function countingSort(array) {
  let min = array[0];
  let max = array[0];
  
  // Find the minimum and maximum values in the array
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  // Create a count array with a length equal to the range of values
  const countArray = new Array(max - min + 1).fill(0);
  
  // Count the occurrences of each value in the input array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i] - min]++;
  }
  
  // ...
}
function countingSort(array) {
  let min = array[0];
  let max = array[0];
  
  // Find the minimum and maximum values in the array
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  // Create a count array with a length equal to the range of values
  const countArray = new Array(max - min + 1).fill(0);
  
  // Count the occurrences of each value in the input array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i] - min]++;
  }
  
  // Modify the count array by accumulating the counts
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }
  
  // ...
}
function countingSort(array) {
  let min = array[0];
  let max = array[0];
  
  // Find the minimum and maximum values in the array
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  
  // Create a count array with a length equal to the range of values
  const countArray = new Array(max - min + 1).fill(0);
  
  // Count the occurrences of each value in the input array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i] - min]++;
  }
  
  // Modify the count array by accumulating the counts
  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }
  
  // Create a sorted array by iterating through the input array
  // in reverse order and placing each element in its correct position
  const sortedArray = new Array(array.length);
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[countArray[array[i] - min] - 1] = array[i];
    countArray[array[i] - min]--;
  }
  
  return sortedArray;
}
const inputArray = [4, 2, 10, 6, 3, 8, 5, 9, 1, 7];
const sortedArray = countingSort(inputArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

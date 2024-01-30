function countingSort(array) {
  // Find the maximum value in the array
  let max = Math.max(...array);

  // Create an array to store the count of each element
  let count = Array(max + 1).fill(0);

  // Increment the count of each element in the input array
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  // Create a new array to store the sorted elements
  let sortedArray = [];

  // Add each element to the sortedArray according to their count
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j < count[i]; j++) {
      sortedArray.push(i);
    }
  }

  // Return the sorted array
  return sortedArray;
}

// Example usage
let arr = [5, 2, 9, 1, 7, 3, 8, 4, 6];
let sortedArr = countingSort(arr);
console.log(sortedArr);

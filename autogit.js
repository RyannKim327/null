function countingSort(array) {
  // Find the maximum element in the array
  let max = Math.max(...array);

  // Create a count array to store the count of each element
  let countArray = new Array(max + 1).fill(0);

  // Store the count of each element in the count array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }

  // Modify the count array to store the actual position of each element in the sorted array
  for (let i = 1; i <= max; i++) {
    countArray[i] += countArray[i - 1];
  }

  // Create a sorted array to store the sorted elements
  let sortedArray = new Array(array.length);

  // Build the sorted array using the count array
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[countArray[array[i]] - 1] = array[i];
    countArray[array[i]]--;
  }

  return sortedArray;
}
let array = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(array);
console.log(sortedArray);
[1, 2, 2, 3, 3, 4, 8]

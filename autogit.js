function countingSort(array) {
  const max = Math.max(...array);
  const count = new Array(max + 1).fill(0);
  const sortedArray = new Array(array.length);

  // Count the occurrences of each element
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  // Calculate the cumulative count
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Place the elements in the sorted array
  for (let i = array.length - 1; i >= 0; i--) {
    sortedArray[count[array[i]] - 1] = array[i];
    count[array[i]]--;
  }

  return sortedArray;
}
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

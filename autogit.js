function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
function countingSort(arr) {
  const max = findMax(arr); // Find the maximum value in the array

  // Create a count array with size=max+1 and initialize it with zeros
  const count = new Array(max + 1).fill(0);

  // Count the occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Calculate the running sum of the count array
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array with the same length as the input array
  const result = new Array(arr.length);

  // Build the result array by placing elements into their correct sorted positions
  for (let i = arr.length - 1; i >= 0; i--) {
    result[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return result;
}
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(inputArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]

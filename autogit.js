function countingSort(arr) {
  // Find the maximum element in the array
  let max = Math.max(...arr);

  // Create a count array with all elements initialized to 0
  let count = Array(max + 1).fill(0);

  // Count the occurrences of each element in the array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Update the count array to store the actual position of each element in the sorted array
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array using the count array
  let sortedArr = Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    sortedArr[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return sortedArr;
}
let arr = [4, 2, 2, 8, 3, 3, 1];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

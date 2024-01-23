function countingSort(arr) {
  // Find the minimum and maximum values in the input array
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Create a counting array with a length equal to the range between min and max
  let count = new Array(max - min + 1).fill(0);

  // Increment the count of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // Modify the count array to store the sum of the previous counts
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Create a result array with the same length as the input array
  let result = Array.from({ length: arr.length });

  // Place each element from the input array into the result array using the count array
  for (let i = 0; i < arr.length; i++) {
    let index = count[arr[i] - min] - 1;
    result[index] = arr[i];
    count[arr[i] - min]--;
  }

  return result;
}

// Example usage
let arr = [4, 2, 9, 5, 2, 8, 7, 1, 3, 7];
let sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 4, 5, 7, 7, 8, 9]

function countingSort(array) {
  // Step 2: Find the maximum element in the array
  let maxValue = Math.max(...array);

  // Step 3: Create a count array with length equal to (maxValue + 1) and initialize all values to 0
  let countArray = new Array(maxValue + 1).fill(0);

  // Step 4: Count the occurrences of each element in the input array
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }

  // Step 5: Generate the sorted array
  let sortedArray = [];
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i);
      countArray[i]--;
    }
  }

  // Step 6: Return the sorted array
  return sortedArray;
}
let array = [4, 2, 2, 8, 3, 3, 1];
let sortedArray = countingSort(array);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]

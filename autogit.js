function countingSort(arr, max) {
  let countArr = new Array(max + 1).fill(0);
  let sortedArr = [];

  // Count the occurrences of each element in the input array
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]]++;
  }

  // Build the sorted array based on the counts
  for (let j = 0; j < countArr.length; j++) {
    while (countArr[j] > 0) {
      sortedArr.push(j);
      countArr[j]--;
    }
  }

  return sortedArr;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const max = Math.max(...arr);
const sortedArr = countingSort(arr, max);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

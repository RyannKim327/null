function countingSort(arr) {
  const max = Math.max(...arr);
  const countArray = new Array(max + 1).fill(0);
  const sortedArray = [];

  // Counting occurrences of each element
  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]]++;
  }

  // Building the sorted array
  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i);
      countArray[i]--;
    }
  }

  return sortedArray;
}

// Example usage
const arr = [4, 2, 5, 1, 3];
const sortedArr = countingSort(arr);
console.log(sortedArr); // [1, 2, 3, 4, 5]

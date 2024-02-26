function countingSort(arr) {
  const max = Math.max(...arr);
  const countArr = new Array(max + 1).fill(0);
  const sortedArr = [];

  // Count frequencies of elements
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]]++;
  }

  // Build sorted array
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      sortedArr.push(i);
      countArr[i]--;
    }
  }

  return sortedArr;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

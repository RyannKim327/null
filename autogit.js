function countingSort(arr, min, max) {
  const count = Array(max - min + 1).fill(0);
  const sortedArr = [];

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  for (let i = min; i <= max; i++) {
    while (count[i - min] > 0) {
      sortedArr.push(i);
      count[i - min]--;
    }
  }

  return sortedArr;
}

// Usage example:
const array = [4, 2, 5, 1, 3, 5, 2];
const min = Math.min(...array);
const max = Math.max(...array);

const sortedArray = countingSort(array, min, max);
console.log(sortedArray); // Output: [1, 2, 2, 3, 4, 5, 5]

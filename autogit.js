function countingSort(arr) {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);

  // Step 4
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Step 5
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  const sortedArray = new Array(arr.length);

  // Step 7
  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArray[--count[arr[i]]] = arr[i];
  }

  return sortedArray;
}

// Example usage
const arr = [3, 1, 5, 1, 2, 4];
const sortedArr = countingSort(arr);
console.log(sortedArr);

function countingSort(arr) {
  const max = Math.max(...arr);
  const count = Array(max + 1).fill(0);

  arr.forEach((num) => {
    count[num]++;
  });

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  const sortedArr = Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    sortedArr[--count[arr[i]]] = arr[i];
  }

  return sortedArr;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

function countingSort(array) {
  const max = Math.max(...array);
  const counts = new Array(max + 1).fill(0);
  const sortedArray = [];

  array.forEach(num => {
    counts[num]++;
  });

  counts.forEach((count, num) => {
    for (let i = 0; i < count; i++) {
      sortedArray.push(num);
    }
  });

  return sortedArray;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

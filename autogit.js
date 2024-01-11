function countingSort(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const count = Array(max - min + 1).fill(0);

  arr.forEach((num) => {
    count[num - min]++;
  });

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  const output = Array(arr.length);

  arr.forEach((num) => {
    output[count[num - min] - 1] = num;
    count[num - min]--;
  });

  return output;
}

// Example usage
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

function countingSort(arr) {
  const max = Math.max(...arr);

  // Count array to store the count of each element
  const count = Array(max + 1).fill(0);

  // Compute the count of each element
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }

  // Compute the cumulative count array
  const cumulativeCount = Array(max + 1).fill(0);
  cumulativeCount[0] = count[0];

  for (let i = 1; i <= max; i++) {
    cumulativeCount[i] = cumulativeCount[i - 1] + count[i];
  }

  // Sort the input array
  const sortedArr = Array(arr.length);

  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr[i];
    const index = cumulativeCount[element] - 1;
    sortedArr[index] = element;
    cumulativeCount[element]--;
  }

  return sortedArr;
}
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr);
[1, 2, 2, 3, 3, 4, 8]

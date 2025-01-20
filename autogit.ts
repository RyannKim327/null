function countingSort(arr: number[]): number[] {
  // Find the maximum value in the array
  const max = Math.max(...arr);

  // Create an array to store the counts of each value
  const counts = new Array(max + 1).fill(0);

  // Count the occurrences of each value in the array
  for (const num of arr) {
    counts[num]++;
  }

  // Create an array to store the sorted values
  const sortedArr = [];

  // Iterate over the counts array and add the values to the sorted array
  for (let i = 0; i < counts.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      sortedArr.push(i);
    }
  }

  return sortedArr;
}

// Example usage:
const arr = [4, 2, 7, 1, 3, 2, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // [1, 1, 2, 2, 3, 3, 4, 7]

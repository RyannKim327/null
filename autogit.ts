function countingSort(arr: number[]): number[] {
  if (arr.length === 0) return [];

  // Find the maximum value to know the size of the count array
  const maxVal = Math.max(...arr);

  // Initialize count array with zeros
  const count = new Array(maxVal + 1).fill(0);

  // Count the occurrences of each number
  for (const num of arr) {
    count[num]++;
  }

  // Rebuild the sorted array
  const sortedArr: number[] = [];
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      sortedArr.push(i);
    }
  }

  return sortedArr;
}

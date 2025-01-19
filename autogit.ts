function countingSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const count = new Array(range).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  let j = 0;
  const output = new Array(arr.length);

  for (let i = 0; i < range; i++) {
    while (count[i]-- > 0) {
      output[j++] = i + min;
    }
  }

  return output;
}

// Example usage:
const arr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(arr);
console.log(sortedArr); // [1, 2, 2, 3, 3, 4, 8]

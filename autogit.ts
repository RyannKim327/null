function countingSort(arr: number[]): number[] {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const range = max - min + 1;
  const countArr = new Array(range).fill(0);

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i] - min]++;
  }

  let j = 0;
  const outputArr = new Array(arr.length);
  for (let i = min; i <= max; i++) {
    while (countArr[i - min]-- > 0) {
      outputArr[j++] = i;
    }
  }

  return outputArr;
}

// Example usage
const inputArr = [4, 2, 2, 8, 3, 3, 1];
const sortedArr = countingSort(inputArr);
console.log(sortedArr); // [1, 2, 2, 3, 3, 4, 8]

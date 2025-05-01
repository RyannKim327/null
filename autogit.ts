function getMax(arr: number[]): number {
  return Math.max(...arr);
}

function countingSort(arr: number[], exp: number): number[] {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  // Count occurrences of each digit in the current place (exp)
  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // Update counts to positions
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array backwards to maintain stability
  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}

function radixSort(arr: number[]): number[] {
  const max = getMax(arr);

  let exp = 1;
  let sortedArr = [...arr]; // copy to avoid mutating input

  while (Math.floor(max / exp) > 0) {
    sortedArr = countingSort(sortedArr, exp);
    exp *= 10;
  }

  return sortedArr;
}

// Example usage
const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(numbers));

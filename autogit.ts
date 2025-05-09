function gnomeSort(arr: number[]): number[] {
  let index = 0;

  while (index < arr.length) {
    if (index === 0) {
      index++;
    }
    if (arr[index] >= arr[index - 1]) {
      index++;
    } else {
      // Swap elements
      [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
      index--;
    }
  }

  return arr;
}

// Example usage:
const nums = [34, 2, 78, 1, 56, 9];
console.log(gnomeSort(nums)); // [1, 2, 9, 34, 56, 78]

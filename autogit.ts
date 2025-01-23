function bubbleSort(arr: number[]): number[] {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
const arr = [5, 2, 8, 3, 1, 6, 4];
console.log(bubbleSort(arr)); // [1, 2, 3, 4, 5, 6, 8]

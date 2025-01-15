function shellSort(arr: number[]): void {
  let n = arr.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j = i;

      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }
}
let arr = [5, 2, 8, 3, 1, 6, 4];
console.log("Original array:", arr);

shellSort(arr);
console.log("Sorted array:", arr);
Original array: [5, 2, 8, 3, 1, 6, 4]
Sorted array: [1, 2, 3, 4, 5, 6, 8]

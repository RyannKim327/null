function shellSort(arr) {
  // ...
}
function shellSort(arr) {
  const n = arr.length;
  // ...
}
function shellSort(arr) {
  const n = arr.length;
  let gap = 1;
  while (gap < n / 3) {
    gap = 3 * gap + 1;
  }
  // ...
}
function shellSort(arr) {
  const n = arr.length;
  let gap = 1;
  while (gap < n / 3) {
    gap = 3 * gap + 1;
  }

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

    gap = Math.floor(gap / 3);
  }

  return arr;
}
const array = [5, 2, 8, 9, 1, 3];
console.log(shellSort(array));

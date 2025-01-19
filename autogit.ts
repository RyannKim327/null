function mergeSort(arr: number[]): number[] {
  const temp = new Array(arr.length);
  let width = 1;

  while (width < arr.length) {
    let left = 0;
    while (left < arr.length) {
      const mid = left + width;
      const right = Math.min(left + 2 * width, arr.length);

      merge(arr, temp, left, mid, right);

      left = left + 2 * width;
    }

    width = width * 2;
  }

  return arr;
}

function merge(arr: number[], temp: number[], left: number, mid: number, right: number) {
  let i = left;
  let j = mid;
  let k = left;

  while (i < mid && j < right) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }
    k++;
  }

  while (i < mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  while (j < right) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  for (i = left; i < right; i++) {
    arr[i] = temp[i];
  }
}
const arr = [5, 2, 8, 3, 1, 6, 4];
console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 8]

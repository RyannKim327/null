for (let i = 1; i < length; i++) {
  // ...
}
while (j >= 0 && arr[j] > current) {
  arr[j + 1] = arr[j];
  j--;
}
arr[j + 1] = current;
function insertionSort(arr) {
  const length = arr.length;

  for (let i = 1; i < length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

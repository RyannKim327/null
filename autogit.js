function shellSort(arr) {
  let n = arr.length;
  for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
    for (let i = gap; i < n; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

// Usage
let arr = [12, 34, 8, 10, 3, 2, 80, 30, 33, 40];
console.log("Array before sorting: " + arr);
arr = shellSort(arr);
console.log("Array after sorting: " + arr);

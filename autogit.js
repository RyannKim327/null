function shellSort(arr) {
  const len = arr.length;
  let interval = Math.floor(len / 2); // Initialize the interval sequence

  while (interval > 0) {
    for (let i = interval; i < len; i++) {
      let temp = arr[i];
      let j = i;

      while (j >= interval && arr[j - interval] > temp) {
        arr[j] = arr[j - interval];
        j -= interval;
      }

      arr[j] = temp;
    }

    interval = Math.floor(interval / 2); // Reduce the interval
  }

  return arr;
}

// Usage example:
const array = [5, 3, 8, 4, 2, 1];
const sortedArray = shellSort(array);
console.log(sortedArray);

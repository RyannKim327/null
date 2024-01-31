function shellSort(array) {
  // ...
}
function shellSort(array) {
  const n = array.length;
  let gap = Math.floor(n / 2); // Start with a half-gap
  // ...
}
function shellSort(array) {
  const n = array.length;
  let gap = Math.floor(n / 2); // Start with a half-gap

  while (gap > 0) {
    // ...
  }
}
function shellSort(array) {
  const n = array.length;
  let gap = Math.floor(n / 2); // Start with a half-gap

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      // ...
    }
    gap = Math.floor(gap / 2);
  }
}
function shellSort(array) {
  const n = array.length;
  let gap = Math.floor(n / 2); // Start with a half-gap

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = array[i];
      let j = i;

      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }

      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  
  return array;
}
function shellSort(array) {
  const n = array.length;
  let gap = Math.floor(n / 2); // Start with a half-gap

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      const temp = array[i];
      let j = i;

      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }

      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
  
  return array;
}

// Test the function
const arr = [8, 3, 11, 6, 2, 1, 9, 4];
console.log(shellSort(arr)); // Output: [1, 2, 3, 4, 6, 8, 9, 11]

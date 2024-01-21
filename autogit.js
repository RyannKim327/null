function shellSort(arr) {
  // Shell sort logic goes here
}
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);
  // Shell sort logic goes here
}
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    // Shell sort logic goes here

    gap = Math.floor(gap / 2);
  }
}
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      let temp = arr[i];
 
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
 
      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}
function shellSort(arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      let j = i;
      let temp = arr[i];
 
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
 
      arr[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return arr;
}

// Usage:
const unsortedArray = [9, 2, 5, 3, 8, 7, 1, 10, 4, 6];
const sortedArray = shellSort(unsortedArray);
console.log(sortedArray);

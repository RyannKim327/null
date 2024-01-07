function shellSort(array) {
  // TODO: Implement shell sort algorithm
}
let gap = 1;
while (gap < array.length / 3) {
  gap = gap * 3 + 1;
}
while (gap > 0) {
  for (let i = gap; i < array.length; i++) {
    let temp = array[i];
    let j = i;
    while (j >= gap && array[j - gap] > temp) {
      array[j] = array[j - gap];
      j -= gap;
    }
    array[j] = temp;
  }
  gap = Math.floor((gap - 1) / 3);
}
return array;
function shellSort(array) {
  let gap = 1;
  while (gap < array.length / 3) {
    gap = gap * 3 + 1;
  }

  while (gap > 0) {
    for (let i = gap; i < array.length; i++) {
      let temp = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }
      array[j] = temp;
    }
    gap = Math.floor((gap - 1) / 3);
  }

  return array;
}
let array = [9, 5, 1, 3, 8, 4, 2, 7, 6];
console.log(shellSort(array)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

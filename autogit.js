function bubbleSort(array) {
  // Your code goes here
}
for (let i = 0; i < array.length - 1; i++) {
  // Your code goes here
}
for (let j = 0; j < array.length - 1 - i; j++) {
  if (array[j] > array[j + 1]) {
    // Swap array[j] and array[j + 1]
    let temp = array[j];
    array[j] = array[j + 1];
    array[j + 1] = temp;
  }
}
return array;
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

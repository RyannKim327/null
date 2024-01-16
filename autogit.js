function selectionSort(array) {
  const length = array.length;
  
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }
  
  return array;
}

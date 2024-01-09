function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  
  return arr;
}

// Testing the selectionSort function
const inputArray = [12, 45, 23, -5, 0, 6, 17, 8];
const sortedArray = selectionSort(inputArray);
console.log(sortedArray);

function bubbleSort(arr) {
  let len = arr.length;
  let swapped;
  
  do {
    swapped = false;
    for(let i = 0; i < len-1; i++) {
      if(arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; // Swap the elements
        swapped = true;
      }
    }
  } while(swapped);
  
  return arr;
}

// Example usage
let numbers = [5, 3, 8, 2, 1, 4];
console.log("Before sorting:", numbers);
console.log("After sorting:", bubbleSort(numbers));

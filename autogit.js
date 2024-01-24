function randomSort(arr) {
  for(let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Example usage
const myArray = [4, 2, 7, 1, 9, 5, 3];
console.log("Original Array:", myArray);
console.log("Randomly Sorted Array:", randomSort(myArray));

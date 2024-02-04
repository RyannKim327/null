function randomSort(arr) {
  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Generate a random index within the array length
    let randomIndex = Math.floor(Math.random() * arr.length);
    
    // Swap the current element with the randomly selected element
    let temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  
  return arr;
}

// Test the random sort algorithm
let numbers = [5, 2, 9, 1, 3, 7];
console.log("Original array: " + numbers);
let sortedArray = randomSort(numbers);
console.log("Sorted array: " + sortedArray);

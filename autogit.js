function fisherYatesShuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5];
console.log("Original Array:", myArray);
console.log("Shuffled Array:", fisherYatesShuffle(myArray));

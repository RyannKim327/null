function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    let j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements array[i] and array[j]
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  return array;
}

// Usage example
let arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);

let shuffledArr = shuffleArray(arr);
console.log("Shuffled array:", shuffledArr);

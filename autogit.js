function randomSort(arr) {
  // Create a copy of the original array
  const shuffledArr = [...arr];
  
  // Loop through the array from the last element to the first
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const randomIndex = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at randomIndex and i
    [shuffledArr[i], shuffledArr[randomIndex]] = [shuffledArr[randomIndex], shuffledArr[i]];
  }
  
  return shuffledArr;
}

// Test the function
const originalArray = [1, 2, 3, 4, 5];
const sortedArray = randomSort(originalArray);
console.log(sortedArray);

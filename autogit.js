function randomSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sortedNumbers = randomSort(numbers);
console.log(sortedNumbers);

// Random Sort Algorithm
function randomSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log("Before random sort:", numbers);

const randomSortedNumbers = randomSort(numbers);
console.log("After random sort:", randomSortedNumbers);

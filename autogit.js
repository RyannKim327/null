function randomSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Usage example:
const array = [1, 2, 3, 4, 5];
const sortedArray = randomSort(array);
console.log(sortedArray);

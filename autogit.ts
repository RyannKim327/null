function randomSort<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(randomSort(numbers)); // e.g. [3, 1, 5, 4, 2]

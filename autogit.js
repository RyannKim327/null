function mean(numbers) {
  if (numbers.length === 0) {
    return null; // Handle edge case for empty list
  }

  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const average = mean(numbers);
console.log(average); // Output: 3

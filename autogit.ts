function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) {
    return null; // Not enough elements
  }
  
  // Create a sorted copy of the array
  const uniqueSortedArr = Array.from(new Set(arr)).sort((a, b) => b - a);
  
  return uniqueSortedArr[1] || null; // Return the second largest or null if it doesn't exist
}

// Example usage:
const numbers = [3, 5, 2, 8, 5];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 5
function findSecondLargest(arr: number[]): number | null {
  let firstLargest: number | null = null;
  let secondLargest: number | null = null;

  for (const num of arr) {
    if (firstLargest === null || num > firstLargest) {
      secondLargest = firstLargest; // Update second largest
      firstLargest = num;           // Update largest
    } else if (num !== firstLargest && (secondLargest === null || num > secondLargest)) {
      secondLargest = num; // Update second largest
    }
  }

  return secondLargest; // Return the second largest or null if it doesn't exist
}

// Example usage:
const numbers = [3, 5, 2, 8, 5];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 5

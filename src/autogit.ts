function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) {
    return null; // Not enough elements
  }
  
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  
  for (const num of arr) {
    if (num > firstMax) {
      secondMax = firstMax;
      firstMax = num;
    } else if (num > secondMax && num !== firstMax) {
      secondMax = num;
    }
  }
  
  return secondMax === -Infinity ? null : secondMax;
}

// Example usage:
const array = [3, 5, 1, 2, 4, 5];
console.log(findSecondLargest(array)); // Output: 5
function findSecondLargest(arr: number[]): number | null {
  if (arr.length < 2) {
    return null; // Not enough elements
  }
  
  // Create a sorted array of unique elements in descending order
  const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
  
  if (uniqueSorted.length < 2) {
    return null; // No second largest distinct element
  }
  
  return uniqueSorted[1];
}

// Example usage:
const array = [3, 5, 1, 2, 4, 5];
console.log(findSecondLargest(array)); // Output: 4

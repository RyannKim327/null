function findSecondLargest(arr: number[]): number | null {
    // Remove duplicates
    const uniqueElements = Array.from(new Set(arr));
    
    // Sort in descending order
    uniqueElements.sort((a, b) => b - a);
    
    // Check if there are at least two elements
    return uniqueElements.length >= 2 ? uniqueElements[1] : null;
}

// Example usage
const numbers = [3, 5, 1, 3, 2, 5];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 3

function findSecondLargest(arr: number[]): number | null {
    // Step 1: Remove duplicates
    const uniqueArr = Array.from(new Set(arr));
    
    // Step 2: Sort in descending order
    uniqueArr.sort((a, b) => b - a);
    
    // Step 3: Check if there are at least two elements
    if (uniqueArr.length < 2) {
        return null; // Not enough elements
    }

    // Step 4: Return the second largest element
    return uniqueArr[1];
}

// Example usage:
const numbers = [10, 5, 8, 1, 10, 8];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 8

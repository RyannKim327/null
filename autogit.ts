function findSecondLargest(arr: number[]): number | null {
    // Check if the array has at least two unique elements
    if (arr.length < 2) {
        return null;
    }

    // Use a Set to remove duplicates
    const uniqueValues = Array.from(new Set(arr));

    // Sort the unique values in descending order
    uniqueValues.sort((a, b) => b - a);

    // Return the second largest element
    return uniqueValues[1] || null;
}

// Example usage:
const numbers = [4, 1, 3, 2, 5, 5, 4];
const secondLargest = findSecondLargest(numbers);
console.log(`The second largest number is: ${secondLargest}`); // Output: The second largest number is: 4

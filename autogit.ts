function findSecondLargest(arr: number[]): number | null {
    // Step 1: Remove duplicates using Set
    const uniqueValues = Array.from(new Set(arr));

    // Step 2: Sort the unique values in descending order
    uniqueValues.sort((a, b) => b - a);

    // Step 3: Return the second largest if it exists
    return uniqueValues.length >= 2 ? uniqueValues[1] : null;
}

// Example usage:
const array = [3, 5, 1, 3, 7, 7, 2];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Output: 5

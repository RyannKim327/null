function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    // Remove duplicates by converting to a Set and back to an array
    const uniqueArr = Array.from(new Set(arr));

    // Sort in descending order
    uniqueArr.sort((a, b) => b - a);

    // Return the second largest element
    return uniqueArr[1] ?? null; // If there is no second largest, return null
}

// Example usage:
const numbers = [3, 5, 2, 5, 1, 7];
console.log(findSecondLargest(numbers)); // Output: 5

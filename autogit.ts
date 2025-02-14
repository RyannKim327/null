function findSecondLargest(arr: number[]): number | null {
    // Remove duplicates
    const uniqueArr = Array.from(new Set(arr));

    // Check if there are at least two unique elements
    if (uniqueArr.length < 2) {
        return null; // or throw an error, depending on your use case
    }

    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);

    // Return the second largest element
    return uniqueArr[1];
}

// Example usage:
const numbers = [3, 5, 1, 4, 5, 2];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 4

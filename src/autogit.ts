function findSecondLargest(arr: number[]): number | null {
    // Check if the array has at least two elements
    if (arr.length < 2) {
        return null; // Not enough elements to determine the second largest
    }

    let first: number | null = null;
    let second: number | null = null;

    for (const num of arr) {
        if (first === null || num > first) {
            // Update second largest before updating the largest
            second = first;
            first = num;
        } else if (num !== first && (second === null || num > second)) {
            // Ensure the number is not equal to the largest and update second largest
            second = num;
        }
    }

    // Return the second largest element, or null if it doesn't exist
    return second;
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
const result = findSecondLargest(array);
console.log(result); // Output: 34

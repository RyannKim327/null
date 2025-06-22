function findSecondLargest(arr: number[]): number | undefined {
    if (arr.length < 2) {
        // Not enough elements to determine the second largest
        return undefined;
    }

    let first: number | undefined = undefined;
    let second: number | undefined = undefined;

    for (const num of arr) {
        if (first === undefined || num > first) {
            // Update second largest before updating the largest
            second = first;
            first = num;
        } else if (num !== first && (second === undefined || num > second)) {
            // Update second largest if the number is not equal to the largest
            second = num;
        }
    }

    // Return the second largest if it exists
    return second;
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
const result = findSecondLargest(array);
console.log("The second largest element is:", result); // Output: 34
function findSecondLargestBySorting(arr: number[]): number | undefined {
    const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
    return uniqueSorted[1];
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
const result = findSecondLargestBySorting(array);
console.log("The second largest element is:", result); // Output: 34

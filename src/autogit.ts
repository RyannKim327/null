function findSecondLargest(arr: number[]): number | null {
    // Handle edge case: array must have at least two elements
    if (arr.length < 2) {
        console.error("Array must contain at least two elements.");
        return null;
    }

    // Initialize first and second largest to the smallest possible number
    let first: number = -Infinity;
    let second: number = -Infinity;

    // Iterate through the array
    for (const num of arr) {
        if (num > first) {
            // Update second largest before updating the largest
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            // Update second largest if the number is not equal to the largest
            second = num;
        }
    }

    // If second is still -Infinity, it means there's no valid second largest
    if (second === -Infinity) {
        console.error("No valid second largest element found.");
        return null;
    }

    return second;
}

// Example usage
const array = [12, 35, 1, 10, 34, 1];
const secondLargest = findSecondLargest(array);
console.log("The second largest element is:", secondLargest);
const array = [12, 35, 1, 10, 34, 1];
The second largest element is: 34
const array = [7, 7, 7];
Error: No valid second largest element found.
null

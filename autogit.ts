function findSecondLargest(arr: number[]): number | null {
    // Remove duplicates and sort the array in descending order
    const uniqueElements = Array.from(new Set(arr));
    uniqueElements.sort((a, b) => b - a);
    
    // Check if there is a second largest element
    return uniqueElements.length < 2 ? null : uniqueElements[1];
}

// Example usage:
const numbers = [5, 7, 2, 7, 8, 1, 8];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 7
function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) return null;

    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;

    for (const num of arr) {
        if (num > first) {
            second = first; // Update second before first
            first = num;    // Update first
        } else if (num > second && num < first) {
            second = num;   // Update second if num is between first and second
        }
    }

    return second === Number.NEGATIVE_INFINITY ? null : second;
}

// Example usage:
const numbers = [5, 7, 2, 7, 8, 1];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 7

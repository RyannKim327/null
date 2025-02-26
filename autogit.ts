function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null; // Not enough elements
    }
    
    let first = -Infinity;
    let second = -Infinity;
    
    for (const num of arr) {
        if (num > first) {
            second = first; // Update second before first
            first = num;    // Update first
        } else if (num > second && num < first) {
            second = num;   // Update second
        }
    }
    
    return second !== -Infinity ? second : null; // Return null if no second largest exists
}

// Example usage:
const array = [12, 35, 1, 10, 34, 1];
const secondLargest = findSecondLargest(array);
console.log(secondLargest); // Outputs: 34

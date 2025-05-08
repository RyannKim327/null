function secondLargest(arr: number[]): number | null {
    if (arr.length < 2) return null; // Not enough elements
    
    // Remove duplicates by using Set, then convert back to an array
    const uniqueArr = Array.from(new Set(arr));

    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);

    return uniqueArr[1]; // Second largest element
}

// Example usage:
const arr = [10, 5, 20, 20, 8];
const result = secondLargest(arr);
console.log(result); // Output: 10
function secondLargest(arr: number[]): number | null {
    if (arr.length < 2) return null; // Not enough elements

    let first = Number.NEGATIVE_INFINITY;
    let second = Number.NEGATIVE_INFINITY;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num !== first) {
            second = num;
        }
    }

    return second === Number.NEGATIVE_INFINITY ? null : second; // Check if we found a valid second largest
}

// Example usage:
const arr = [10, 5, 20, 20, 8];
const result = secondLargest(arr);
console.log(result); // Output: 10

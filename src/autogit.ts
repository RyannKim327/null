function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    // Create a Set to remove duplicates
    const uniqueElements = Array.from(new Set(arr));

    // Sort the array in descending order
    uniqueElements.sort((a, b) => b - a);

    // Return the second element
    return uniqueElements[1] || null; // Return null if there's no second largest
}

// Example usage
const numbers = [3, 1, 4, 4, 5, 2];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 4
function findSecondLargest(arr: number[]): number | null {
    let first = -Infinity;
    let second = -Infinity;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second !== -Infinity ? second : null; // Return null if there's no second largest
}

// Example usage
const numbers = [3, 1, 4, 4, 5, 2];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 4
const nums1 = [7, 5, 7, 8, 1, 2];
const nums2 = [1, 1, 1];
const nums3 = [10];
const nums4 = [];

console.log(findSecondLargest(nums1)); // Output: 7
console.log(findSecondLargest(nums2)); // Output: null
console.log(findSecondLargest(nums3)); // Output: null
console.log(findSecondLargest(nums4)); // Output: null

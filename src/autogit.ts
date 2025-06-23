function findSecondLargest(arr: number[]): number | null {
    // Check if the array has at least two elements
    if (arr.length < 2) {
        console.error("Array must contain at least two elements.");
        return null; // Return null for invalid input
    }

    let firstLargest: number | null = null;
    let secondLargest: number | null = null;

    for (const num of arr) {
        // Update firstLargest and secondLargest
        if (firstLargest === null || num > firstLargest) {
            secondLargest = firstLargest; // Move the current largest to secondLargest
            firstLargest = num; // Update the largest
        } else if (num !== firstLargest && (secondLargest === null || num > secondLargest)) {
            secondLargest = num; // Update secondLargest if num is not equal to firstLargest
        }
    }

    // Check if a valid secondLargest was found
    if (secondLargest === null) {
        console.error("No second largest element found (array might have identical elements).");
        return null;
    }

    return secondLargest;
}
const arr1 = [10, 20, 30, 40, 50];
console.log(findSecondLargest(arr1)); // Output: 40

const arr2 = [5, 5, 5, 5];
console.log(findSecondLargest(arr2)); // Output: null (all elements are identical)

const arr3 = [7];
console.log(findSecondLargest(arr3)); // Output: null (not enough elements)

const arr4 = [-10, -20, -30, -5];
console.log(findSecondLargest(arr4)); // Output: -10

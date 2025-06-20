function findSecondLargest(arr: number[]): number | undefined {
    // Step 1: Remove duplicates by converting the array to a Set, then back to an array
    const uniqueElements = Array.from(new Set(arr));

    // Step 2: Sort the array in descending order
    uniqueElements.sort((a, b) => b - a);

    // Step 3: Return the second largest element if it exists
    return uniqueElements[1]; // undefined if there is no second largest element
}

// Example usage:
const numbers = [4, 1, 7, 7, 3, 9, 9];
const secondLargest = findSecondLargest(numbers);
console.log(secondLargest); // Output: 7
console.log(findSecondLargest([])); // Output: undefined (empty array)
console.log(findSecondLargest([5])); // Output: undefined (single element)
console.log(findSecondLargest([2, 2, 2])); // Output: undefined (all elements identical)
console.log(findSecondLargest([10, 20])); // Output: 10 (two unique elements)

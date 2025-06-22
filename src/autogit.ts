// Merge function to combine two sorted arrays
function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let i = 0; // Pointer for the left array
    let j = 0; // Pointer for the right array

    // Compare elements from both arrays and add the smaller one to the result
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from the left array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add any remaining elements from the right array
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Merge sort function
function mergeSort<T>(array: T[]): T[] {
    // Base case: If the array has 1 or no elements, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // Find the middle index to split the array
    const mid = Math.floor(array.length / 2);

    // Recursively sort the left and right halves
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Sorted Array: [3, 9, 10, 27, 38, 43, 82]

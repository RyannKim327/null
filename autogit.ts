function mergeSort<T>(array: T[]): T[] {
    // Base case: if the array has 0 or 1 element, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Step 1: Divide the array into two halves
    const mid = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, mid));   // recursively sort the left half
    const rightHalf = mergeSort(array.slice(mid));      // recursively sort the right half

    // Step 2: Merge the sorted halves
    return merge(leftHalf, rightHalf);
}

function merge<T>(left: T[], right: T[]): T[] {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Step 3: Compare each element and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Step 4: Concatenate any remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]

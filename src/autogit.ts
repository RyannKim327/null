function mergeSort(arr: number[]): number[] {
    // Base case: If the array has 1 or no elements, it's already sorted.
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const mergedArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and add the smaller one to the merged array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            mergedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            mergedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Add any remaining elements from the left array
    while (leftIndex < left.length) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
    }

    // Add any remaining elements from the right array
    while (rightIndex < right.length) {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
    }

    return mergedArray;
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
Sorted Array: [3, 9, 10, 27, 38, 43, 82]

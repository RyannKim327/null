function mergeSort(array: number[]): number[] {
    // Base case: if the array has 0 or 1 elements, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Step 1: Split the array into halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const sortedArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two sorted arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in left, add them to sortedArray
    while (leftIndex < left.length) {
        sortedArray.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in right, add them to sortedArray
    while (rightIndex < right.length) {
        sortedArray.push(right[rightIndex]);
        rightIndex++;
    }

    return sortedArray;
}

// Example usage:
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(arrayToSort);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]

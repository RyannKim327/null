function mergeSort(arr: number[]): number[] {
    // Base case: an array of zero or one element is already sorted
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
    const sorted: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare each element of both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in left, add them to sorted
    while (leftIndex < left.length) {
        sorted.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in right, add them to sorted
    while (rightIndex < right.length) {
        sorted.push(right[rightIndex]);
        rightIndex++;
    }

    return sorted;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr);  // Output: [3, 9, 10, 27, 38, 43, 82]

function mergeSort(arr: number[]): number[] {
    // Base case: if the array is of length 1 or less, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const merged: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge elements while there are elements in both arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are leftovers in the left array, add them
    while (leftIndex < left.length) {
        merged.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are leftovers in the right array, add them
    while (rightIndex < right.length) {
        merged.push(right[rightIndex]);
        rightIndex++;
    }

    return merged;
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]

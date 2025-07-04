function mergeSort(arr: number[]): number[] {
    // Base case: an array of zero or one element is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Step 1: Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Step 2: Recursively sort both halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Step 4: Compare each element of the left and right arrays and merge them
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Step 5: If there are remaining elements in the left array, add them
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Step 6: If there are remaining elements in the right array, add them
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log('Sorted Array:', sortedArray);

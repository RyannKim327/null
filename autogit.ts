function mergeSort(arr: number[]): number[] {
    // Base case: if the array has one or no elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let sorted: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the left and right arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left array, add them
    while (leftIndex < left.length) {
        sorted.push(left[leftIndex]);
        leftIndex++;
    }

    // If there are remaining elements in the right array, add them
    while (rightIndex < right.length) {
        sorted.push(right[rightIndex]);
        rightIndex++;
    }

    return sorted;
}

// Example usage
const arrayToSort = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(arrayToSort);
console.log("Sorted array:", sortedArray);

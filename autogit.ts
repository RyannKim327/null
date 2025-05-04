function mergeSort(arr: number[]): number[] {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Split the array into halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort both halves
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
    const sortedArray: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the left and right arrays in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            sortedArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in left or right, push them to the sorted array
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]

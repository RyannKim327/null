function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element of the unsorted part
        let minIndex = i;

        // Find the index of the minimum element in the unsorted part
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If the minimum is not the position of i, swap them
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
const sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);

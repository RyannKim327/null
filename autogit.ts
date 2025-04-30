function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element of the unsorted part
        let minIndex = i;

        // Iterate through the unsorted part to find the smallest element
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
console.log("Unsorted array:", numbers);
const sortedNumbers = selectionSort(numbers);
console.log("Sorted array:", sortedNumbers);

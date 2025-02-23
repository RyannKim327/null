function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        // Find the minimum element in the unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = selectionSort(numbers);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 64]

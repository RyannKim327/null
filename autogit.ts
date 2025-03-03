function selectionSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the minimum is the first element
        let minIndex = i;

        // Test against elements after i to find the smallest
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if the current element is smaller
            }
        }

        // If minIndex is not the position of the first element,
        // then swap the found minimum element with the first element
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap elements
        }
    }

    return arr;
}

// Example usage:
const numbers = [64, 25, 12, 22, 11];
const sortedNumbers = selectionSort(numbers);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 64]

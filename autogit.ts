function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    do {
        swapped = false; // No swaps yet
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true; // A swap occurred
            }
        }
        n--; // Reduce n because the last element is already sorted
    } while (swapped); // Continue until no swaps occur in a pass

    return arr; // Return the sorted array
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 34, 64, 90]

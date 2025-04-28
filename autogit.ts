function bubbleSort(arr: number[]): number[] {
    let n = arr.length;
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // After each pass, the largest element bubbles up to its correct position
        n--; // Reduce the range for the next pass
    } while (swapped);

    return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(unsortedArray)); // [1, 2, 5, 5, 6, 9]

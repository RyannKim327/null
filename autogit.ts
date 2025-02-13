function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // Loop through all elements in the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Last i elements are already in place, so we ignore them
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if elements are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true; // Set swapped to true
            }
        }

        // If no two elements were swapped in the inner loop, then the array is sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
const numbers: number[] = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]

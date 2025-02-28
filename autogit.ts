function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    // Loop through each element in the array
    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        // Compare adjacent elements and swap them if they're in the wrong order
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no elements were swapped, the array is sorted
        if (!swapped) break;
    }

    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

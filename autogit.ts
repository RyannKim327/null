function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    do {
        swapped = false;

        // Loop through the array
        for (let i = 0; i < n - 1; i++) {
            // Compare adjacent items
            if (arr[i] > arr[i + 1]) {
                // Swap if they are in the wrong order
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                // Set swapped to true to indicate a swap occurred
                swapped = true;
            }
        }
    } while (swapped); // Continue until no swaps are made

    return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);

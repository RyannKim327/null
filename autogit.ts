function bubbleSort(arr: number[]): number[] {
    // Get the length of the array
    const n: number = arr.length;
    
    // Outer loop for passes
    for (let i = 0; i < n - 1; i++) {
        // Flag to optimize the algorithm by detecting if any swaps occurred
        let swapped: boolean = false;
        
        // Inner loop for comparisons and swapping
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                // Set swapped to true
                swapped = true;
            }
        }
        
        // If no swapping occurred, array is already sorted
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// Example usage
const unsortedArray: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", unsortedArray);

const sortedArray: number[] = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);

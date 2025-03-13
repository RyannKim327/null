function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    
    // Outer loop for number of passes
    for (let i = 0; i < n - 1; i++) {
        // Flag to optimize the algorithm by detecting if any swaps occur
        let swapped = false;
        
        // Inner loop for comparing and swapping adjacent elements
        for (let j = 0; j < n - i - 1; j++) {
            // If the element is greater than the next element, swap them
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                // Set swapped to true
                swapped = false;
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
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", unsortedArray);
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
function bubbleSort<T>(arr: T[], comparator: (a: T, b: T) => number = (a, b) => 
    a > b ? 1 : a < b ? -1 : 0): T[] {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < n - i - 1; j++) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        if (!swapped) break;
    }
    
    return arr;
}

// Example usages
console.log(bubbleSort([3, 1, 4, 1, 5, 9])); // Numeric sort
console.log(bubbleSort(['banana', 'apple', 'cherry'])); // String sort

function bubbleSort(arr: number[]): number[] {
    const n = arr.length;
    let swapped: boolean;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Last i elements are already sorted
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        
        // If no elements were swapped, the array is sorted
        if (!swapped) {
            break;
        }
    }
    
    return arr;
}

// Example usage:
const arr = [5, 2, 9, 1, 5, 6];
const sortedArr = bubbleSort(arr);
console.log(sortedArr); // Output: [1, 2, 5, 5, 6, 9]

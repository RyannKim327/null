function shellSort(arr: number[]): number[] {
    const n = arr.length;
    
    // Start with an initial gap, reducing it to 1 at the end
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // Save the current element to be inserted
            const temp = arr[i];
            let j = i;

            // Shift earlier gap-sorted elements up until the correct location for temp is found
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }

            // Put temp in its correct location
            arr[j] = temp;
        }
        
        // Reduce the gap for the next iteration
        gap = Math.floor(gap / 2);
    }

    return arr;
}

// Example usage
const arr = [12, 34, 54, 2, 3];
console.log("Original array:", arr);
console.log("Sorted array:", shellSort(arr));
Original array: [12, 34, 54, 2, 3]
Sorted array: [2, 3, 12, 34, 54]

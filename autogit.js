function shellSort(arr) {
    // Start with a large gap, then reduce the gap
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform an insertion sort for the elements in each gap
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i];
            let j = i;
            
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
    }
    
    return arr;
}

// Example usage
let arr = [12, 34, 54, 2, 3];
console.log("Original Array: " + arr);
console.log("Sorted Array: " + shellSort(arr));

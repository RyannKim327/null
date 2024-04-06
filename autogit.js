function shellSort(arr) {
    let n = arr.length;
    
    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        
        // Perform an insertion sort for elements at each gap
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            
            // Move elements that are greater than temp in the gap
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            arr[j] = temp;
        }
    }
    
    return arr;
}

// Usage
let array = [12, 7, 36, 2, 42, 10, 25];
console.log("Original Array:", array);
console.log("Sorted Array:", shellSort(array));

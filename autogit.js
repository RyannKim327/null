function shellSort(arr) {
    let n = arr.length;
  
    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Perform a gapped insertion sort for this gap size
        for (let i = gap; i < n; i++) {
            // Add arr[i] to the elements that have been gap sorted
            let temp = arr[i];
  
            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
  
            // Put arr[i] in its correct location
            arr[j] = temp;
        }
    }
    return arr;
}

// Example usage
let arr = [12, 34, 54, 2, 3];
console.log("Original Array:");
console.log(arr);
console.log("Array sorted with Shell Sort:");
console.log(shellSort(arr));

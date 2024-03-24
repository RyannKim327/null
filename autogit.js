function shellSort(arr) {
    let n = arr.length;
  
    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        // Perform insertion sort on the elements with the given gap
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
  
            // Shift earlier elements that are greater than temp to the right
            let j;
            for (j = i; j >= gap && arr[j-gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // Insert the original temp value at the correct position
            arr[j] = temp;
        }
    }
    
    return arr;
}

// Example usage
let arr = [12, 34, 54, 2, 3];
console.log(shellSort(arr));

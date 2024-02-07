function bubbleSort(arr) {
    var len = arr.length;
    var sorted;
    
    for (var i = 0; i < len; i++) {
        sorted = true;
        
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap two elements if they are in the wrong order
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                
                sorted = false; // Mark the iteration as unsorted
            }
        }
        
        if (sorted) {
            break; // If no swaps are made in an iteration, the array is already sorted
        }
    }
    
    return arr;
}

// Example usage:
var array = [5, 3, 8, 2, 1, 4];
console.log(bubbleSort(array)); // Output: [1, 2, 3, 4, 5, 8]

function shellSort(arr) {
    var n = arr.length;
    
    // Start with a big gap, then reduce the gap
    for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        // Do a gapped insertion sort for this gap size
        for (var i = gap; i < n; i++) {
            // Add arr[i] to the elements that have been gap sorted
            // Save arr[i] in temp and make a hole at position i
            var temp = arr[i];
            
            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            var j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            
            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }
    return arr;
}

// Example usage
var array = [12, 34, 54, 2, 3];
console.log("Original Array: " + array);
console.log("Sorted Array: " + shellSort(array));

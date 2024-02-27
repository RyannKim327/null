function selectionSort(arr) {
    var minIndex, temp;
    var n = arr.length;
    
    for (var i = 0; i < n - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    
    return arr;
}

// Example usage
var arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + arr);
console.log("Sorted array: " + selectionSort(arr));

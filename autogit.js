function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage
var arr = [12, 11, 13, 5, 6];
console.log("Original array: " + arr);
console.log("Sorted array: " + insertionSort(arr));

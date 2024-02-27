function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage
var arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + arr);
var sortedArr = bubbleSort(arr);
console.log("Sorted array: " + sortedArr);

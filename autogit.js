function bubbleSort(arr) {
    var len = arr.length;
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);

    return arr;
}

// Example usage:
var array = [8, 5, 2, 9, 1, 4, 3, 7, 6];
console.log("Before sorting: " + array);
console.log("After sorting: " + bubbleSort(array));

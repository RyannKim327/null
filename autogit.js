function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

var array = [6, 4, 3, 1, 8, 7, 2, 5];
console.log("Unsorted array:", array);
console.log("Sorted array:", bubbleSort(array));

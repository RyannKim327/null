function shellSort(arr) {
    var n = arr.length;
    for (var gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        for (var i = gap; i < n; i++) {
            var temp = arr[i];
            var j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }
            arr[j] = temp;
        }
    }
    return arr;
}

// Example Usage
var arr = [12, 34, 54, 2, 3];
console.log("Original Array: " + arr);
console.log("Sorted Array: " + shellSort(arr));

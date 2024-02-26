function shellSort(arr) {
    var n = arr.length;
    var gap = Math.floor(n/2);
    
    while(gap > 0) {
        for (var i = gap; i < n; i++) {
            var temp = arr[i];
            var j = i;
            
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        
        gap = Math.floor(gap / 2);
    }
    
    return arr;
}

var array = [12, 34, 54, 2, 3];
console.log("Original Array: " + array);
console.log("Sorted Array: " + shellSort(array));

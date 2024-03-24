function countingSort(arr, maxValue) {
    var count = [];
    var sortedIndex = 0;
    var arrLen = arr.length;
    var countLen = maxValue + 1;

    // Initialize the count array with 0
    for (var i = 0; i < countLen; i++) {
        count[i] = 0;
    }

    // Count the occurrences of each element
    for (var i = 0; i < arrLen; i++) {
        count[arr[i]]++;
    }

    // Update the count array to keep track of the actual position of each element
    for (var i = 0; i < countLen; i++) {
        while (count[i] > 0) {
            arr[sortedIndex] = i;
            sortedIndex++;
            count[i]--;
        }
    }

    return arr;
}

// Example usage
var arr = [4, 2, 2, 8, 3, 3, 1];
var maxValue = 8;
var sortedArr = countingSort(arr, maxValue);
console.log(sortedArr); // Output: [1, 2, 2, 3, 3, 4, 8]

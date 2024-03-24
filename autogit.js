function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = currentVal;
    }
    
    return arr;
}

// Example usage
let arr = [5, 3, 8, 4, 2];
console.log(insertionSort(arr)); // Output: [2, 3, 4, 5, 8]

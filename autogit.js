function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > currentValue) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = currentValue;
    }
    
    return arr;
}

// Example usage
let unsortedArray = [5, 3, 8, 4, 2, 6, 1, 7];
let sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

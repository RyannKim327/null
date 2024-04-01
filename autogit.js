function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example usage
let unsortedArray = [5, 3, 8, 6, 2];
let sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [2, 3, 5, 6, 8]

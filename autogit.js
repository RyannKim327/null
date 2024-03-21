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

// Test the insertion sort algorithm
let arr = [5, 3, 8, 2, 1, 4];
console.log("Before sorting:", arr);
console.log("After sorting:", insertionSort(arr));

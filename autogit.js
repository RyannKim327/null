function heapSort(arr) {
    function heapify(arr, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;
    
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
    
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
    
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
            heapify(arr, n, largest);
        }
    }
    
    function buildMaxHeap(arr, n) {
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }
    
    let n = arr.length;
    
    buildMaxHeap(arr, n);
    
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
    
        heapify(arr, i, 0);
    }
    
    return arr;
}

// Example Usage
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", arr);
console.log("Sorted Array:", heapSort(arr));

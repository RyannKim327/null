function shellSort(arr) {
    const n = arr.length;
    let gap = Math.floor(n / 2);
    
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
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

// Example usage
const arr = [12, 34, 54, 2, 3];
console.log('Original Array:', arr);
console.log('Sorted Array:', shellSort(arr));

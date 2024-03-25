function selectionSort(arr) {
    const n = arr.length;
    
    for(let i = 0; i < n; i++) {
        let minIdx = i;
        
        for(let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        
        if(minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    
    return arr;
}

// Example
const array = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(array);
console.log(sortedArray);

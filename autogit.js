function shellSort(arr) {
    let n = arr.length;
    
    for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)) {
        
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;

            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage:
const arr = [12, 34, 54, 2, 3];
console.log("Original array: ", arr);

const sortedArray = shellSort(arr);
console.log("Sorted array: ", sortedArray);
